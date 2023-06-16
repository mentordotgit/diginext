import { logError } from "diginext-utils/dist/xconsole/log";

import type { AppGitInfo, IApp } from "@/entities";
import type InputOptions from "@/interfaces/InputOptions";
import { getCurrentGitRepoData } from "@/plugins";

import { DB } from "../api/DB";
import { printInformation } from "../project/printInformation";
import { getAppConfigFromApp } from "./app-helper";
import { createOrSelectApp } from "./create-or-select-app";
import { createOrSelectProject } from "./create-or-select-project";

export async function execInitApp(options: InputOptions) {
	const initProject = await createOrSelectProject(options);
	const initApp = await createOrSelectApp(initProject.slug, options);

	// ! The ONLY different with "createApp": Select the current working directory instead of create new one
	options.skipCreatingDirectory = true;
	if (typeof options.targetDirectory == "undefined") options.targetDirectory = process.cwd();

	// update framework & GIT info in the database
	const gitInfo = await getCurrentGitRepoData(options.targetDirectory);
	if (options.isDebugging) console.log("[INIT APP] gitInfo :>> ", gitInfo);

	const updateData = {} as IApp;
	if (options.framework) updateData.framework = options.framework;
	updateData.git = {} as AppGitInfo;
	updateData.git.provider = gitInfo.provider;
	updateData.git.repoURL = gitInfo.remoteURL;
	updateData.git.repoSSH = gitInfo.remoteSSH;

	if (options.isDebugging) console.log("[INIT APP] updateData :>> ", updateData);
	const [updatedApp] = await DB.update<IApp>("app", { slug: initApp.slug }, updateData);
	if (options.isDebugging) console.log("[INIT APP] updatedApp :>> ", updatedApp);

	if (!updatedApp) logError(`[INIT APP] Can't initialize app due to network issue.`);

	// print project information:
	const finalConfig = getAppConfigFromApp(updatedApp);
	printInformation(finalConfig);

	return options;
}
