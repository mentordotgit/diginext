import { log } from "diginext-utils/dist/xconsole/log";

import { Config } from "@/app.config";
import type { DeployBuildParams } from "@/controllers/DeployController";
import type { IBuild, IRelease, IWorkspace } from "@/entities";
import type { Ownership } from "@/interfaces/SystemTypes";
import type { StartBuildParams } from "@/modules/build";
import { buildAndDeploy } from "@/modules/build/build-and-deploy";
import { type DeployBuildOptions, deployBuild } from "@/modules/deploy/deploy-build";
import { deployRelease } from "@/modules/deploy/deploy-release";
import { currentVersion } from "@/plugins";

export default class DeployService {
	/**
	 * Build container image first, then deploy that build to target deploy environment.
	 */
	async buildAndDeploy(buildParams: StartBuildParams, deployParams: DeployBuildParams, ownership: Ownership) {
		const { DB } = await import("@/modules/api/DB");
		let app = await DB.findOne("app", { slug: buildParams.appSlug });

		// change cluster (if needed)
		if (deployParams.cluster) {
			const cluster = await DB.findOne("cluster", { slug: deployParams.cluster, workspace: ownership.workspace._id });
			if (cluster) app = await DB.updateOne("app", { _id: app._id }, { [`deployEnvironment.${deployParams.env}.cluster`]: cluster.slug });
		}
		// change container registry (if needed)
		if (buildParams.registrySlug) deployParams.registry = buildParams.registrySlug;
		if (deployParams.registry) {
			const registry = await DB.findOne("registry", { slug: deployParams.registry, workspace: ownership.workspace._id });
			console.log("buildAndDeploy > registry.slug :>> ", registry.slug);
			if (registry) app = await DB.updateOne("app", { _id: app._id }, { [`deployEnvironment.${deployParams.env}.registry`]: registry.slug });
		}

		const author = ownership.owner || (await DB.findOne("user", { _id: deployParams.author }, { populate: ["activeWorkspace"] }));
		const workspace = author.activeWorkspace as IWorkspace;

		const deployBuildOptions: DeployBuildOptions = {
			env: deployParams.env || buildParams.env || "dev",
			shouldUseFreshDeploy: deployParams.shouldUseFreshDeploy,
			author,
			workspace,
		};

		// check for version compatibility between CLI & SERVER:
		buildParams.user = author;

		if (buildParams.cliVersion) {
			const breakingChangeVersionCli = buildParams.cliVersion.split(".")[0];
			const serverVersion = currentVersion();
			const breakingChangeVersionServer = serverVersion.split(".")[0];

			if (breakingChangeVersionCli != breakingChangeVersionServer) {
				throw new Error(
					`Your CLI version (${buildParams.cliVersion}) is much lower than the BUILD SERVER version (${serverVersion}). Please update your CLI with: "dx update"`
				);
			}
		}

		// if (typeof buildParams.buildWatch === "undefined") buildParams.buildWatch = true;

		// start build in background process:
		log(`buildAndDeploy > buildParams.buildNumber :>>`, buildParams.buildNumber);
		buildAndDeploy(buildParams, deployBuildOptions);

		const { appSlug, buildNumber } = buildParams;
		const buildServerUrl = Config.BASE_URL;
		const SOCKET_ROOM = `${appSlug}-${buildNumber}`;
		const logURL = `${buildServerUrl}/build/logs?build_slug=${SOCKET_ROOM}&env=${deployParams.env}`;

		return { logURL };
	}

	/**
	 * Deploy from a build
	 */
	async deployBuild(build: IBuild, options: DeployBuildOptions) {
		return deployBuild(build, options);
	}

	/**
	 * Deploy from a release
	 */
	async deployRelease(release: IRelease, options: DeployBuildOptions) {
		return deployRelease(release, options);
	}
}

export { DeployService };
