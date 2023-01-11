import type execa from "execa";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import path from "path";

import type CloudDatabase from "@/entities/CloudDatabase";
import type CloudProvider from "@/entities/CloudProvider";
import type Cluster from "@/entities/Cluster";
import type ContainerRegistry from "@/entities/ContainerRegistry";
import type Framework from "@/entities/Framework";
import type GitProvider from "@/entities/GitProvider";
import type User from "@/entities/User";
import type Workspace from "@/entities/Workspace";
import type InputOptions from "@/interfaces/InputOptions";

import { log, logInfo, readJson, saveJson, showDocs } from "../plugins";
import { CLI_CONFIG_DIR, CLI_CONFIG_FILE, CLI_DIR } from "./const";

export const cliOpts: execa.Options = {
	// stdio: "inherit",
	shell: "bash",
};

export const getContainerResourceBySize = (size: "none" | "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" | "10x") => {
	if (size == "none") return {};
	const scale = parseInt(size.substring(1, size.length - 1));
	return {
		requests: {
			cpu: `${50 * scale}m`,
			memory: `${256 * scale}Mi`,
		},
		limits: {
			cpu: `${50 * scale}m`,
			memory: `${256 * scale}Mi`,
		},
	};
};

export type CliConfig = {
	buildServerUrl?: string;

	access_token?: string;
	currentUser?: User;
	currentWorkspace?: Workspace;

	defaultFramework?: Framework;

	currentGitProvider?: GitProvider;
	currentRegistry?: ContainerRegistry;
	currentProvider?: CloudProvider;
	currentCluster?: Cluster;
	currentDatabase?: CloudDatabase;

	gitProviders?: GitProvider[];
	k8sClusters?: Cluster[];
	containerRegistries?: ContainerRegistry[];
	providers?: CloudProvider[];
	databases?: CloudDatabase[];
	frameworks?: Framework[];
};

/**
 * Get local CLI config
 */
export const getCliConfig = () => {
	// Create new config file if it's not existed
	if (!existsSync(CLI_CONFIG_DIR)) mkdirSync(CLI_CONFIG_DIR, { recursive: true });
	if (!existsSync(CLI_CONFIG_FILE)) writeFileSync(CLI_CONFIG_FILE, "{}", "utf8");

	const conf = readJson(CLI_CONFIG_FILE);
	return conf as CliConfig;
};

/**
 * Save/update CLI config locally
 * @param {CliConfig} updatedConfig
 */
export const saveCliConfig = (updatedConfig: CliConfig) => {
	const conf: CliConfig = { ...getCliConfig(), ...updatedConfig };
	return saveJson(JSON.stringify(conf), CLI_CONFIG_FILE, { overwrite: true }) as CliConfig;
};

export const execConfig = async (options?: InputOptions) => {
	const { secondAction, thirdAction } = options;

	switch (secondAction) {
		case "get":
			const conf = getCliConfig();
			log(conf);
			return conf;

		case "provider":
			switch (thirdAction) {
				case "current":
					try {
						const curProvider = getCliConfig().currentProvider;
						logInfo(curProvider.name);
						return curProvider;
					} catch (e) {
						return null;
					}

				case "list":
					try {
						const list = getCliConfig().gitProviders;
						logInfo(list.map((item) => item.name));
						return list;
					} catch (e) {
						return null;
					}

				default:
					break;
			}
			break;

		case "cluster":
			break;

		default:
			await showDocs(path.resolve(CLI_DIR, "docs/config.md"));
			break;
	}
};
