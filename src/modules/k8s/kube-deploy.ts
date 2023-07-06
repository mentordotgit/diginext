import chalk from "chalk";
import { log, logError, logSuccess, logWarn } from "diginext-utils/dist/xconsole/log";
import { existsSync, mkdirSync } from "fs";
import yaml from "js-yaml";
import { isArray, isEmpty } from "lodash";
import path from "path";

import { isServerMode } from "@/app.config";
import { cliOpts } from "@/config/config";
import { CLI_DIR } from "@/config/const";
import type { IApp, ICluster, IRelease } from "@/entities";
import type { IResourceQuota, KubeIngress, KubeService } from "@/interfaces";
import type { KubeEnvironmentVariable } from "@/interfaces/EnvironmentVariable";
import { objectToDeploymentYaml, wait, waitUntil } from "@/plugins";
import { isValidObjectId } from "@/plugins/mongodb";
import { makeSlug } from "@/plugins/slug";

import { DB } from "../api/DB";
import getDeploymentName from "../deploy/generate-deployment-name";
import ClusterManager from "./index";
import { logPodByFilter } from "./kubectl";

export interface RolloutOptions {
	onUpdate?: (msg?: string) => void;
}

/**
 * Clean up PRERELEASE resources by ID or release data
 * @param idOrRelease - Release ID or {Release} data
 */
export async function cleanUp(idOrRelease: string | IRelease) {
	let releaseData: IRelease;

	// validation
	if (isValidObjectId(idOrRelease)) {
		let data = await DB.findOne<IRelease>("release", { id: idOrRelease });

		if (!data) {
			throw new Error(`Release "${idOrRelease}" not found.`);
		}
		releaseData = data as IRelease;
	} else {
		if (!(idOrRelease as IRelease).appSlug) {
			throw new Error(`Release "${idOrRelease}" is invalid.`);
		}
		releaseData = idOrRelease as IRelease;
	}

	const { slug: releaseSlug, cluster: clusterShortName, projectSlug, appSlug, preYaml, prereleaseUrl, namespace, env } = releaseData;

	let cluster: ICluster;
	// authenticate cluster's provider & switch kubectl to that cluster:
	try {
		cluster = await ClusterManager.authClusterByShortName(clusterShortName);
	} catch (e) {
		logError(`[KUBE_DEPLOY] Clean up > `, e);
		return { error: e.message };
	}
	const { contextName: context } = cluster;

	// Fallback support to the deprecated "main-app" name
	const app = await DB.findOne<IApp>("app", { slug: appSlug }, { populate: ["project"] });
	const deprecatedMainAppName = makeSlug(app?.name).toLowerCase();
	const mainAppName = await getDeploymentName(app);

	// Clean up Prerelease YAML
	const cleanUpCommands = [];

	// Delete INGRESS to optimize cluster
	cleanUpCommands.push(
		ClusterManager.deleteIngressByFilter(namespace, {
			context,
			skipOnError: true,
			filterLabel: `phase=prerelease,main-app=${mainAppName}`,
		})
	);

	// Delete Prerelease SERVICE to optimize cluster
	cleanUpCommands.push(ClusterManager.deleteServiceByFilter(namespace, { context, filterLabel: `phase=prerelease,main-app=${mainAppName}` }));

	// Clean up Prerelease Deployments
	cleanUpCommands.push(ClusterManager.deleteDeploymentsByFilter(namespace, { context, filterLabel: `phase=prerelease,main-app=${mainAppName}` }));

	// ! --- fallback support deprecated app name ---
	// Delete INGRESS (fallback support deprecated app name)
	if (deprecatedMainAppName)
		cleanUpCommands.push(
			ClusterManager.deleteIngressByFilter(namespace, {
				context,
				skipOnError: true,
				filterLabel: `phase=prerelease,main-app=${deprecatedMainAppName}`,
			})
		);

	// ! --- fallback support deprecated app name ---
	// Delete Prerelease SERVICE to optimize cluster (fallback support deprecated app name)
	if (deprecatedMainAppName)
		cleanUpCommands.push(
			ClusterManager.deleteServiceByFilter(namespace, { context, filterLabel: `phase=prerelease,main-app=${deprecatedMainAppName}` })
		);

	// ! --- fallback support deprecated app name ---
	// Clean up Prerelease Deployments
	if (deprecatedMainAppName)
		cleanUpCommands.push(
			ClusterManager.deleteDeploymentsByFilter(namespace, { context, filterLabel: `phase=prerelease,main-app=${deprecatedMainAppName}` })
		);

	// Clean up immediately & just ignore if any errors
	for (const cmd of cleanUpCommands) {
		try {
			await cmd;
		} catch (e) {
			logWarn(`[CLEAN UP] Ignore command: ${e}`);
		}
	}

	// * Print success:
	let msg = `🎉  PRERELEASE DEPLOYMENT DELETED  🎉`;
	logSuccess(msg);

	return { error: null, data: releaseData };
}

/**
 * Roll out a release - VER 1.0
 * @param  {String} id - Release ID
 */
export async function previewPrerelease(id: string, options: RolloutOptions = {}) {
	const { onUpdate } = options;

	let releaseData = await DB.findOne<IRelease>("release", { id });

	if (isEmpty(releaseData)) return { error: `Release not found.` };

	const { slug: releaseSlug, cluster: clusterShortName, appSlug, projectSlug, preYaml, prereleaseUrl, namespace, env } = releaseData;

	const app = await DB.findOne<IApp>("app", { slug: appSlug }, { populate: ["project"] });
	const mainAppName = await getDeploymentName(app);

	log(`Preview the release: "${releaseSlug}" (${id})...`);
	if (onUpdate) onUpdate(`Preview the release: "${releaseSlug}" (${id})...`);

	let cluster: ICluster;
	// authenticate cluster's provider & switch kubectl to that cluster:
	try {
		cluster = await ClusterManager.authClusterByShortName(clusterShortName);
	} catch (e) {
		logError(`[PREVIEW_PRERELEASE]`, e);
		return { error: e.message };
	}
	const { contextName: context } = cluster;
	if (!context) throw new Error(`[KUBE_DEPLOY] previewPrerelease > Cluster context not found.`);

	/**
	 * Check if there is any prod namespace, if not -> create one
	 */
	const isNsExisted = await ClusterManager.isNamespaceExisted(namespace, { context });
	if (!isNsExisted) {
		log(`[KUBE_DEPLOY] Namespace "${namespace}" not found, creating one...`);
		const createNsRes = await ClusterManager.createNamespace(namespace, { context });
		if (!createNsRes) {
			const errMsg = `[KUBE_DEPLOY] Failed to create new namespace: ${namespace} (Cluster: ${clusterShortName} / Namespace: ${namespace} / App: ${appSlug} / Env: ${env})`;
			logError(errMsg);
			return { error: errMsg };
		}
	}

	/**
	 * Create "imagePullSecrets" in a namespace
	 */
	try {
		const { name: imagePullSecretName } = await ClusterManager.createImagePullSecretsInNamespace(appSlug, env, clusterShortName, namespace);
		if (onUpdate)
			onUpdate(`[PREVIEW] Created "${imagePullSecretName}" imagePullSecrets in the "${namespace}" namespace (cluster: "${clusterShortName}").`);
	} catch (e) {
		throw new Error(`[PREVIEW] Can't create "imagePullSecrets" in the "${namespace}" namespace (cluster: "${clusterShortName}").`);
	}

	/**
	 * Delete current PRE-RELEASE deployments
	 */
	const curPrereleaseDeployments = await ClusterManager.getDeploysByFilter(namespace, {
		context,
		filterLabel: `phase=prerelease,main-app=${mainAppName}`,
	});
	if (!isEmpty(curPrereleaseDeployments)) {
		await ClusterManager.deleteDeploymentsByFilter(namespace, {
			context,
			filterLabel: `phase=prerelease,main-app=${mainAppName}`,
		});
	}

	/**
	 * Apply PRE-RELEASE deployment YAML
	 */
	const prereleaseDeploymentRes = await ClusterManager.kubectlApplyContent(preYaml, { context });
	if (!prereleaseDeploymentRes)
		throw new Error(
			`Can't preview the pre-release "${id}" (Cluster: ${clusterShortName} / Namespace: ${namespace} / App: ${appSlug} / Env: ${env}):\n${preYaml}`
		);

	logSuccess(`The PRE-RELEASE environment is ready to preview: https://${prereleaseUrl}`);

	return { error: null, data: releaseData };
}

/**
 * Roll out a release
 */
export async function rollout(id: string, options: RolloutOptions = {}) {
	const { onUpdate } = options;
	const { execa, execaCommand, execaSync } = await import("execa");

	const releaseData = await DB.findOne<IRelease>("release", { id });
	if (isEmpty(releaseData)) return { error: `Release "${id}" not found.` };

	const {
		slug: releaseSlug,
		projectSlug, // ! This is not PROJECT_ID of Google Cloud provider
		cluster: clusterShortName,
		appSlug,
		preYaml: prereleaseYaml,
		deploymentYaml,
		endpoint: endpointUrl,
		namespace,
		env,
	} = releaseData as IRelease;

	log(`Rolling out the release: "${releaseSlug}" (ID: ${id})`);
	if (onUpdate) onUpdate(`Rolling out the release: "${releaseSlug}" (ID: ${id})`);

	// get the app
	const app = await DB.findOne<IApp>("app", { slug: appSlug }, { populate: ["project"] });
	log(`Rolling out > app:`, app);

	const deprecatedMainAppName = makeSlug(app?.name).toLowerCase();
	const mainAppName = await getDeploymentName(app);
	log(`Rolling out > mainAppName:`, mainAppName);

	// authenticate cluster's provider & switch kubectl to that cluster:
	try {
		await ClusterManager.authClusterByShortName(clusterShortName);
		log(`Rolling out > Checked connectivity of "${clusterShortName}" cluster.`);
	} catch (e) {
		logError(`[ROLL_OUT]`, e);
		return { error: e.message };
	}

	const cluster = await DB.findOne<ICluster>("cluster", { shortName: clusterShortName });
	if (!cluster) {
		logError(`Cluster "${clusterShortName}" not found.`);
		return { error: `Cluster "${clusterShortName}" not found.` };
	}
	const { name: context } = await ClusterManager.getKubeContextByCluster(cluster);
	log(`Rolling out > Connected to "${clusterShortName}" cluster.`);

	const tmpDir = path.resolve(CLI_DIR, `storage/releases/${releaseSlug}`);
	if (!existsSync(tmpDir)) mkdirSync(tmpDir, { recursive: true });

	// ! NEW WAY -> LESS DOWNTIME WHEN ROLLING OUT NEW DEPLOYMENT !

	/**
	 * Check if there is any prod namespace, if not -> create one
	 */
	const isNsExisted = await ClusterManager.isNamespaceExisted(namespace, { context });
	if (!isNsExisted) {
		log(`Namespace "${namespace}" not found, creating one...`);
		if (onUpdate) onUpdate(`Namespace "${namespace}" not found, creating one...`);

		const createNsRes = await ClusterManager.createNamespace(namespace, { context });
		if (!createNsRes) {
			const err = `[KUBE_DEPLOY] Failed to create new namespace: ${namespace} (Cluster: ${clusterShortName} / Namespace: ${namespace} / App: ${appSlug} / Env: ${env})`;
			logError(`[ROLL_OUT]`, err);
			if (onUpdate) onUpdate(err);
			return { error: err };
		}
	}

	// create "imagePullSecret" in namespace:
	try {
		const { name: imagePullSecretName } = await ClusterManager.createImagePullSecretsInNamespace(appSlug, env, clusterShortName, namespace);
		if (onUpdate)
			onUpdate(
				`[ROLL OUT] Created "${imagePullSecretName}" imagePullSecrets in the "${namespace}" namespace (cluster: "${clusterShortName}").`
			);
	} catch (e) {
		const error = `[ROLL OUT] Can't create "imagePullSecrets" in the "${namespace}" namespace (cluster: "${clusterShortName}").`;
		// throw new Error();
		return { error };
	}

	/**
	 * 1. Create SERVICE & INGRESS
	 */
	console.log("deploymentYaml :>> ", deploymentYaml);

	let replicas = 1,
		envVars: KubeEnvironmentVariable[] = [],
		resourceQuota: IResourceQuota = {},
		service: KubeService,
		svcName,
		ingress: KubeIngress,
		ingressName,
		deployment,
		deploymentName;

	yaml.loadAll(deploymentYaml, (doc) => {
		if (doc && doc.kind == "Ingress") {
			ingress = doc;
			ingressName = doc.metadata.name;
		}

		if (doc && doc.kind == "Service") {
			service = doc;
			svcName = doc.metadata.name;
		}

		if (doc && doc.kind == "Deployment") {
			replicas = doc.spec.replicas;
			envVars = doc.spec.template.spec.containers[0].env;
			resourceQuota = doc.spec.template.spec.containers[0].resources;
			deployment = doc;
			deploymentName = doc.metadata.name;
		}
	});
	// log(`3`, { appSlug, service, svcName, ingress, ingressName, deploymentName });

	// create new service if it's not existed
	const currentServices = await ClusterManager.getServices(namespace, { context, filterLabel: `phase=live,main-app=${mainAppName}` });

	// if (!isEmpty(currentServices)) {
	// 	// The service is existed
	// 	service = currentServices[0];
	// } else {

	// Always apply new service, since the PORT could be changed !!!

	const SVC_CONTENT = objectToDeploymentYaml(service);
	const applySvcRes = await ClusterManager.kubectlApplyContent(SVC_CONTENT, { context });
	if (!applySvcRes) {
		// throw new Error(
		// 	`Cannot apply SERVICE "${service.metadata.name}" (Cluster: ${clusterShortName} / Namespace: ${namespace} / App: ${appSlug} / Env: ${env}):\n${SVC_CONTENT}`
		// );
		const error = `Cannot apply SERVICE "${service.metadata.name}" (Cluster: ${clusterShortName} / Namespace: ${namespace} / App: ${appSlug} / Env: ${env}):\n${SVC_CONTENT}`;
		// throw new Error();
		return { error };
	}

	if (onUpdate) onUpdate(`Created new service named "${appSlug}".`);

	// check ingress domain has been used yet or not:
	let isDomainUsed = false,
		usedDomain: string,
		deleteIng: KubeIngress;

	if (ingress) {
		const domains = ingress.spec.rules.map((rule) => rule.host) || [];
		console.log("domains :>> ", domains);

		if (domains.length > 0) {
			const allIngresses = await ClusterManager.getAllIngresses({ context });

			allIngresses.filter((ing) => {
				domains.map((domain) => {
					if (ing.spec.rules.map((rule) => rule.host).includes(domain)) {
						isDomainUsed = true;
						usedDomain = domain;
						deleteIng = ing;
					}
				});
			});
			if (isDomainUsed) {
				await ClusterManager.deleteIngress(deleteIng.metadata.name, deleteIng.metadata.namespace, { context });

				if (onUpdate)
					onUpdate(
						`Domain "${usedDomain}" has been used before at "${deleteIng.metadata.namespace}" namespace -> Deleted "${deleteIng.metadata.name}" ingress to create a new one.`
					);
			}
		}
	}

	// log(`5`);

	let prereleaseApp, prereleaseAppName;
	if (env === "prod") {
		yaml.loadAll(prereleaseYaml, function (doc) {
			if (doc && doc.kind == "Service") prereleaseAppName = doc.spec.selector.app;
			if (doc && doc.kind == "Deployment") prereleaseApp = doc;
		});

		if (!prereleaseAppName) return { error: `"prereleaseAppName" is invalid.` };
		if (onUpdate) onUpdate(`prereleaseAppName = ${prereleaseAppName}`);

		// deploymentName = prereleaseAppName;
		// deployment = prereleaseApp;
	}

	/**
	 * 2. Delete prerelease app if it contains "prerelease" (OLD WAY)
	 * and apply new app for production
	 */

	// TODO: Check crashed / failed deployments -> delete them!
	let oldDeploys = await ClusterManager.getDeploys(namespace, { context, filterLabel: `phase!=prerelease,main-app=${mainAppName}` });
	if (oldDeploys.length === 0)
		oldDeploys = await ClusterManager.getDeploys(namespace, { context, filterLabel: `phase!=prerelease,main-app=${deprecatedMainAppName}` });

	if (onUpdate) onUpdate(`Current app deployments (to be deleted later on): ${oldDeploys.map((d) => d.metadata.name).join(",")}`);

	const createNewDeployment = async (appDoc) => {
		const newApp = appDoc;
		const newAppName = deploymentName;
		newApp.metadata.name = deploymentName;

		// labels
		newApp.metadata.labels.phase = "live"; // mark this app as "live" phase
		newApp.metadata.labels.project = projectSlug;
		newApp.metadata.labels.app = newAppName;
		newApp.metadata.labels["main-app"] = mainAppName;

		newApp.spec.template.metadata.labels.phase = "live";
		newApp.spec.template.metadata.labels.app = newAppName;
		newApp.spec.template.metadata.labels["main-app"] = mainAppName;

		// envs & quotas
		newApp.spec.template.spec.containers[0].env = envVars;
		newApp.spec.template.spec.containers[0].resources = resourceQuota;

		// selector
		newApp.spec.selector.matchLabels.app = newAppName;

		let APP_CONTENT = objectToDeploymentYaml(newApp);
		const appCreateResult = await ClusterManager.kubectlApplyContent(APP_CONTENT, { context });
		if (!appCreateResult) {
			throw new Error(
				`[ROLL OUT] Failed to apply APP DEPLOYMENT config to "${newAppName}" in "${namespace}" namespace of "${context}" context:\n${APP_CONTENT}`
			);
		}

		if (onUpdate) onUpdate(`Created new deployment "${newAppName}" successfully.`);

		return newApp;
	};

	if (deploymentName.indexOf("prerelease") > -1 || isEmpty(oldDeploys)) {
		// ! if "prerelease" was deployed in OLD WAY or there are no old deployments
		await createNewDeployment(deployment);
	} else {
		// ! if "prerelease" was deployed in NEW WAY -> add label "phase" = "live"
		try {
			const args = [
				`--context=${context}`,
				"patch",
				"deploy",
				deploymentName,
				"-n",
				namespace,
				"--patch",
				`'{ "metadata": { "labels": { "phase": "live" } } }'`,
			];
			await execa(`kubectl`, args, cliOpts);
			if (onUpdate) onUpdate(`Patched "${deploymentName}" deployment successfully.`);
		} catch (e) {
			// if (onUpdate) onUpdate(`Patched "${deploymentName}" deployment failure: ${e.message}`);
			await createNewDeployment(deployment);
		}
	}

	/**
	 * 3. [ONLY PROD DEPLOY] Update ENV variables to PRODUCTION values
	 */
	if (env === "prod" && !isEmpty(envVars)) {
		const setPreEnvVarRes = await ClusterManager.setEnvVar(envVars, prereleaseAppName, namespace, { context });
		if (setPreEnvVarRes) if (onUpdate) onUpdate(`Patched ENV to "${prereleaseAppName}" deployment successfully.`);
	}

	// Wait until the deployment is ready!
	const isNewDeploymentReady = async () => {
		const newDeploys = await ClusterManager.getDeploys(namespace, { context, filterLabel: `phase=live,app=${deploymentName}` });
		// log(`${namespace} > ${deploymentName} > newDeploys :>>`, newDeploys);

		let isReady = false;
		newDeploys.forEach((deploy) => {
			log(`[INTERVAL] deploy.status.conditions :>>`, deploy.status.conditions);
			if (onUpdate) {
				deploy.status?.conditions?.map((condition) => {
					// if (condition.type === "False") isReady = true;
					if (condition.type.toLowerCase() === "progressing")
						onUpdate(`DEPLOY STATUS: [${condition.type.toUpperCase()}] - ${condition.reason} - ${condition.message}`);
				});
			}

			log(`[INTERVAL] deploy.status.replicas :>>`, deploy.status.replicas);
			log(`[INTERVAL] deploy.status.unavailableReplicas :>>`, deploy.status.unavailableReplicas);
			log(`[INTERVAL] deploy.status.readyReplicas :>>`, deploy.status.readyReplicas);

			if (deploy.status.unavailableReplicas && deploy.status.unavailableReplicas >= 1) {
				isReady = false;
			} else if (deploy.status.readyReplicas && deploy.status.readyReplicas >= 1) {
				isReady = true;
			}
		});

		log(`[INTERVAL] Checking new deployment's status -> Is Ready:`, isReady);
		return isReady;
	};

	const isReallyReady = await waitUntil(isNewDeploymentReady, 10, 2 * 60);
	log(`[INTERVAL] Checking new deployment's status -> Is Fully Ready:`, isReallyReady);

	// TODO: check app's health instead of 15 seconds
	// Wait another 15s to make sure app is not crashing...
	if (isReallyReady) {
		if (onUpdate) onUpdate(`App is being started up, please wait...`);
		await wait(15 * 1000);
	}
	let isCrashed = false;
	const newDeploys = await ClusterManager.getDeploys(namespace, { context, filterLabel: `phase=live,app=${deploymentName}` });
	newDeploys.forEach((deploy) => {
		isCrashed = deploy.status.unavailableReplicas && deploy.status.unavailableReplicas >= 1;
	});

	// Try to get the container logs and print to the web ui
	let containerLogs = await logPodByFilter(namespace, { filterLabel: `app=${deploymentName}`, context });
	if (!containerLogs) containerLogs += "\n\n-----\n\n" + (await logPodByFilter(namespace, { filterLabel: `main-app=${mainAppName}`, context }));
	if (!containerLogs)
		containerLogs += "\n\n-----\n\n" + (await logPodByFilter(namespace, { filterLabel: `app=${deploymentName}`, previous: true, context }));
	if (!containerLogs)
		containerLogs += "\n\n-----\n\n" + (await logPodByFilter(namespace, { filterLabel: `main-app=${mainAppName}`, previous: true, context }));

	if (onUpdate && containerLogs) onUpdate(`---- CONTAINER'S LOGS ----- \n${containerLogs}`);

	// throw the error
	if (
		!isReallyReady ||
		isCrashed ||
		containerLogs.indexOf("Error from server") > -1 ||
		containerLogs.indexOf("An error occurred") > -1 ||
		containerLogs.indexOf("Command failed") > -1
	) {
		return {
			error: `[ERROR] Your app deployment has been stucked or crashed, check the container's logs to identify the problems.`,
		};
	}

	/**
	 * 4. Update "selector" of PRODUCTION SERVICE to select PRERELEASE APP NAME
	 */
	try {
		await execa(
			`kubectl`,
			[
				`--context=${context}`,
				`patch`,
				"service",
				svcName,
				"-n",
				namespace,
				"--patch",
				`{ "spec": { "selector": { "app": "${deploymentName}" } } }`,
			],
			cliOpts
		);
		if (onUpdate) onUpdate(`Patched "${svcName}" service successfully >> new deployment: ${deploymentName}`);
	} catch (e) {
		if (onUpdate) onUpdate(`[WARNING] Patched "${svcName}" service failure: ${e.message}`);
		// return { error: e.message };
	}

	/**
	 * 5. Scale replicas to PRODUCTION config
	 */
	try {
		await execa("kubectl", [`--context=${context}`, "scale", `--replicas=${replicas}`, `deploy`, deploymentName, `-n`, namespace], cliOpts);
		if (onUpdate) onUpdate(`Scaled "${deploymentName}" replicas to ${replicas} successfully`);
	} catch (e) {
		if (onUpdate) onUpdate(`[WARNING] Scaled "${deploymentName}" replicas to ${replicas} failure: ${e.message}`);
	}

	/**
	 * 6. Apply resource quotas
	 */
	if (resourceQuota && resourceQuota.limits && resourceQuota.requests) {
		const resourcesStr = `--limits=cpu=${resourceQuota.limits.cpu},memory=${resourceQuota.limits.memory} --requests=cpu=${resourceQuota.requests.cpu},memory=${resourceQuota.requests.memory}`;
		const resouceCommand = `kubectl set resources deployment/${deploymentName} ${resourcesStr} -n ${namespace}`;
		try {
			await execaCommand(resouceCommand);
			if (onUpdate) onUpdate(`Applied resource quotas to ${deploymentName} successfully`);
		} catch (e) {
			if (onUpdate) onUpdate(`[WARNING] Command failed: ${resouceCommand}`);
			if (onUpdate) onUpdate(`[WARNING] Applied "resources" quotas failure: ${e.message}`);
		}
	}

	// ! ALWAYS Create new ingress
	const ING_CONTENT = objectToDeploymentYaml(ingress);
	const ingCreateResult = await ClusterManager.kubectlApplyContent(ING_CONTENT, { context });
	if (!ingCreateResult)
		throw new Error(
			`Failed to apply invalid INGRESS config (${env.toUpperCase()}) to "${ingressName}" in "${namespace}" namespace of "${context}" context:\n${ING_CONTENT}`
		);

	// Print success:
	const prodUrlInCLI = chalk.bold(`https://${endpointUrl}`);
	const successMsg = `🎉 PUBLISHED AT: ${prodUrlInCLI} 🎉`;
	logSuccess(successMsg);

	// Filter previous releases:
	const filter = [{ projectSlug, appSlug, active: true }];

	// Mark previous releases as "inactive":
	await DB.update<IRelease>("release", { $or: filter }, { active: false });

	// Mark this latest release as "active":
	const latestReleases = await DB.update<IRelease>("release", { _id: id }, { active: true });

	const latestRelease = latestReleases[0];
	// log({ latestRelease });

	if (!latestRelease) throw new Error(`Cannot set the latest release (${id}) status as "active".`);

	/**
	 * 5. Clean up > Delete old deployments
	 */

	if (isArray(oldDeploys) && oldDeploys.length > 0) {
		const waitTime = 2 * 60 * 1000;
		const oldDeploysCleanUpCommands = oldDeploys
			.filter((d) => d.metadata.name != deploymentName)
			.map((deploy) => {
				const deployName = deploy.metadata.name;
				return ClusterManager.deleteDeploy(deployName, namespace, { context });
			});

		if (isServerMode) {
			setTimeout(
				async function (_commands) {
					try {
						await Promise.all(_commands);
						if (onUpdate) onUpdate(`[CLEAN UP] Deleted ${_commands.length} app deployments.`);
					} catch (e) {
						logWarn(e.toString());
					}
				},
				waitTime,
				oldDeploysCleanUpCommands
			);
		} else {
			try {
				await Promise.all(oldDeploysCleanUpCommands);
				if (onUpdate) onUpdate(`[CLEAN UP] Deleted ${oldDeploysCleanUpCommands.length} app deployments.`);
			} catch (e) {
				logWarn(e.toString());
			}
		}
	}

	/**
	 * 6. [ONLY PROD DEPLOY] Clean up prerelease deployments (to optimize cluster resource quotas)
	 */
	if (env === "prod") {
		cleanUp(releaseData)
			.then(({ error }) => {
				if (error) throw new Error(`Unable to clean up PRERELEASE of release id [${id}]`);
				logSuccess(`Clean up PRERELEASE of release id [${id}] SUCCESSFULLY.`);
				if (onUpdate) onUpdate(`Clean up PRERELEASE of release id [${id}] SUCCESSFULLY.`);
			})
			.catch((e) => logError(`Unable to clean up PRERELEASE of release id [${id}]:`, e));
	}
	return { error: null, data: releaseData };
}
