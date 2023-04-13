import { isEmpty } from "lodash";

import type { App, Build, Project, Release, User, Workspace } from "@/entities";
import type ApiKeyAccount from "@/entities/ApiKeyAccount";
import type { AppConfig } from "@/interfaces/AppConfig";

import { DB } from "../api/DB";
import { getDeployEvironmentByApp } from "../apps/get-app-environment";
import { fetchDeploymentFromContent } from "../deploy/fetch-deployment";

type OwnershipParams = {
	author: User;
	workspace?: Workspace;
};

export const createReleaseFromBuild = async (build: Build, env?: string, ownership?: OwnershipParams) => {
	// get app data
	const app = await DB.findOne<App>("app", { id: build.app }, { populate: ["owner", "workspace"] });
	if (!app) throw new Error(`App "${build.appSlug}" not found.`);

	const project = await DB.findOne<Project>("project", { id: build.project });
	if (!project) throw new Error(`Project "${build.projectSlug}" not found.`);
	// console.log("project :>> ", project);

	// get deployment data
	const { branch, image, tag, cliVersion } = build;
	const { slug: projectSlug } = project;
	const { owner, workspace, slug: appSlug } = app;
	const { slug: workspaceSlug, _id: workspaceId } = workspace as Workspace;

	const buildNumber = tag ?? image.split(":")[1];

	const deployedEnvironment = await getDeployEvironmentByApp(app, env);
	// console.log(`deployedEnvironment > ${env} :>>`, deployedEnvironment);

	const { deploymentYaml, prereleaseDeploymentYaml, namespace, provider, project: providerProject, cluster } = deployedEnvironment;

	const deploymentData = fetchDeploymentFromContent(deploymentYaml);
	const prereleaseDeploymentData = fetchDeploymentFromContent(prereleaseDeploymentYaml);

	// log({ deploymentData });
	// log({ prereleaseDeploymentData });

	const { IMAGE_NAME } = deploymentData;

	let defaultAuthor = owner as User;
	if (!defaultAuthor) defaultAuthor = await DB.findOne<ApiKeyAccount>("api_key_user", { workspaces: workspaceId });

	// declare AppConfig
	const appConfig = {
		name: app.name,
		slug: appSlug,
		project: projectSlug,
		owner: defaultAuthor.slug,
		workspace: workspaceSlug,
		framework: app.framework,
		git: app.git,
		environment: app.deployEnvironment || {},
	} as AppConfig;

	// prepare release data
	const data = {
		env,
		cliVersion,
		name: `${projectSlug}/${appSlug}:${buildNumber}`,
		image: IMAGE_NAME,
		// old diginext.json
		diginext: JSON.stringify(appConfig),
		appConfig: appConfig,
		// build status
		branch: branch,
		buildStatus: "success",
		active: env !== "prod",
		// deployment target
		namespace,
		provider,
		cluster,
		providerProjectId: providerProject,
		// deployment
		endpoint: !isEmpty(deploymentData.domains) ? deploymentData.domains[0] : "",
		deploymentYaml: deploymentData.deployContent,
		envVars: app.deployEnvironment[env].envVars || [],
		// production
		productionUrl: !isEmpty(deploymentData.domains) ? deploymentData.domains[0] : "",
		prodYaml: deploymentData.deployContent,
		// relationship
		build: build._id,
		app: app._id,
		project: project._id,
		// ownership
		projectSlug,
		appSlug,
		createdBy: isEmpty(ownership) ? defaultAuthor.slug : ownership.author.slug,
		owner: isEmpty(ownership) ? defaultAuthor._id : ownership.author._id,
		workspace: workspaceId,
	} as Release;

	if (env === "prod") {
		// prerelease
		data.preYaml = prereleaseDeploymentData.deployContent;
		data.prereleaseUrl = prereleaseDeploymentData.domains[0];
	}

	// create new release in the database
	const newRelease = DB.create<Release>("release", data);

	// log("Created new Release successfully:", newRelease);

	return newRelease;
};
