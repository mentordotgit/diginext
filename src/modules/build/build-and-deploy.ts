import chalk from "chalk";
import dayjs from "dayjs";
import humanizeDuration from "humanize-duration";

import { Config } from "@/app.config";
import type { IApp } from "@/entities";
import { type IRelease } from "@/entities";
import { MongoDB } from "@/plugins/mongodb";
import { socketIO } from "@/server";
import MediaService from "@/services/MediaService";

import { DB } from "../api/DB";
import screenshot from "../capture/screenshot";
import type { DeployBuildOptions } from "../deploy/deploy-build";
import { deployBuild } from "../deploy/deploy-build";
import type { StartBuildParams } from "./build";
import { startBuild } from "./build";
import { sendLog } from "./send-log-message";

export const buildAndDeploy = async (buildParams: StartBuildParams, deployParams: DeployBuildOptions) => {
	// [1] Build container image
	if (!deployParams.env) deployParams.env = "dev";
	buildParams.buildWatch = true;
	buildParams.env = deployParams.env;

	const { build, startTime, SOCKET_ROOM } = await startBuild(buildParams);
	sendLog({ SOCKET_ROOM, message: `[BUILD_AND_DEPLOY] Finished building > buildNumber :>> ${build.tag}` });

	if (!build) throw new Error(`Unable to build "${buildParams.appSlug}" app (${buildParams.env}).`);

	const { appSlug, projectSlug } = build;
	const { env } = deployParams;

	// [2] Deploy the build to target deploy environment
	const deployRes = await deployBuild(build, deployParams);

	let errorMsg = ``;
	if (deployRes?.error) {
		errorMsg = `Unable to deploy "${buildParams.appSlug}" app (${buildParams.env}): ${deployRes?.error}`;
		sendLog({ SOCKET_ROOM, message: errorMsg });
		// throw new Error(errorMsg);
		return;
	}
	if (!deployRes) {
		errorMsg = `Unable to deploy "${buildParams.appSlug}" app (${buildParams.env}): UNKNOWN_REASON`;
		sendLog({ SOCKET_ROOM, message: errorMsg });
		// throw new Error(errorMsg);
		return;
	}

	const { release, deployment } = deployRes;
	// console.log("[BUILD_AND_DEPLOY] Finished deploying > release :>> ", release);
	sendLog({ SOCKET_ROOM, message: `[BUILD_AND_DEPLOY] Finished building > Release ID :>> ${release._id}` });

	const releaseId = MongoDB.toString(release._id);
	const { endpoint, prereleaseUrl } = deployment;

	// [3] Print success information
	const endTime = dayjs();
	const buildDuration = endTime.diff(startTime, "millisecond");
	const humanDuration = humanizeDuration(buildDuration, { round: true });

	sendLog({ SOCKET_ROOM, message: chalk.green(`🎉 FINISHED DEPLOYING AFTER ${humanDuration} 🎉`), type: "success" });

	// capture a screenshot:
	try {
		const result = await screenshot(env === "prod" ? prereleaseUrl : endpoint, { fullPage: false });
		if (result) {
			// success -> write to db
			delete result.buffer;
			const mediaSvc = new MediaService();
			const media = await mediaSvc.create({ ...result, owner: deployParams.author._id, workspace: deployParams.workspace._id });
			if (media) {
				// update screenshot to release
				const updatedRelease = await DB.updateOne<IRelease>("release", { _id: releaseId }, { screenshot: media.url });
				if (updatedRelease) sendLog({ SOCKET_ROOM, message: `Screenshot: ${media.url}` });

				// update screenshot to app's deploy environment
				const app = await DB.updateOne<IApp>("app", { slug: appSlug }, { [`deployEnvironment.${env}.screenshot`]: media.url });
				if (!app) sendLog({ SOCKET_ROOM, message: `Unable to update screenshot to app's deploy environment (${env})` });
			}
		}
	} catch (e) {
		sendLog({
			SOCKET_ROOM,
			message: `[BUILD_AND_DEPLOY] Unable to capture the webpage screenshot (${env === "prod" ? prereleaseUrl : endpoint}): ${e}`,
		});
	}

	if (env == "prod") {
		const buildServerUrl = Config.BASE_URL;
		const rollOutUrl = `${buildServerUrl}/project/?lv1=release&project=${projectSlug}&app=${appSlug}&env=prod`;

		sendLog({ SOCKET_ROOM, message: chalk.bold(chalk.yellow(`✓ Preview at: ${prereleaseUrl}`)), type: "success" });

		sendLog({
			SOCKET_ROOM,
			message: chalk.bold(chalk.yellow(`✓ Review & publish at: ${rollOutUrl}`)),
			type: "success",
		});

		sendLog({
			SOCKET_ROOM,
			message: chalk.bold(chalk.yellow(`✓ Roll out with CLI command:`), `$ dx rollout ${releaseId}`),
			type: "success",
		});
	} else {
		sendLog({ SOCKET_ROOM, message: chalk.bold(chalk.yellow(`✓ Check out your release at: ${endpoint}`)), type: "success" });
	}

	// disconnect CLI client:
	socketIO?.to(SOCKET_ROOM).emit("message", { action: "end" });

	return { build, release };
};
