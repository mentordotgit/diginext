import { logError } from "diginext-utils/dist/console/log";

import type { AppDto, AppGitInfo, IApp } from "@/entities";

import { DB } from "../api/DB";

export const updateAppGitInfo = async (app: IApp, gitInfo: AppGitInfo) => {
	const updateData = {} as AppDto;
	updateData.git = gitInfo;

	// console.log("[INIT APP] updateData :>> ", updateData);
	const updatedApp = await DB.updateOne<IApp>("app", { slug: app.slug }, updateData);
	// console.log("[INIT APP] updatedApp :>> ", updatedApp);

	if (!updatedApp) logError(`[INIT APP] Can't initialize app due to network issue.`);

	return updatedApp;
};
