import { logError } from "diginext-utils/dist/console/log";
import inquirer from "inquirer";

import { saveCliConfig } from "@/config/config";
import type { IFramework } from "@/entities/Framework";
import type { IGitProvider } from "@/entities/GitProvider";
import type { IProject } from "@/entities/Project";
import type InputOptions from "@/interfaces/InputOptions";
import { fetchApi } from "@/modules/api/fetchApi";
import createProjectByForm from "@/modules/project/create-project";

export async function askAppInitQuestions(options?: InputOptions) {
	if (!options.project) {
		const { shouldCreateNewProject } = await inquirer.prompt({
			type: "confirm",
			name: "shouldCreateNewProject",
			message: "Create new project? (NO if you want to select an existing project)",
			default: true,
		});

		if (!shouldCreateNewProject) {
			// search name
			const { keyword } = await inquirer.prompt({
				type: "input",
				name: "keyword",
				message: "Enter keyword to search projects (leave empty to get recent projects):",
			});

			// find/search
			const { status, data, messages } = await fetchApi<IProject>({
				url: keyword ? `/api/v1/project?name=${keyword}&limit=10&search=true` : `/api/v1/project?limit=10`,
			});
			if (!status) return logError(messages);

			const projects = data as IProject[];
			// log({ projects });

			// display list to select:
			const { selectedProject } = await inquirer.prompt({
				type: "list",
				name: "selectedProject",
				message: "Select your project:",
				choices: projects.map((p) => {
					return { name: `${p.name} (${p.slug})`, value: p };
				}),
			});
			options.project = selectedProject;
			options.projectSlug = selectedProject.slug;
			options.projectName = selectedProject.name;
		} else {
			const newProject = await createProjectByForm(options);
			options.project = newProject;
			options.projectSlug = newProject.slug;
			options.projectName = newProject.name;
		}
	}

	options.namespace = `${options.projectSlug}-${options.env || "dev"}`;

	if (!options.name) {
		const { name } = await inquirer.prompt({
			type: "input",
			name: "name",
			message: "Enter your app name:",
			validate: function (value) {
				if (value.length > 3) {
					return true;
				} else {
					return "App name is required & has more than 3 characters.";
				}
			},
		});
		options.name = name;
	}

	options.framework = { name: "unknown", slug: "unknown" } as IFramework;
	options.frameworkVersion = "unknown";

	// setup git repo
	let currentGitProvider;
	if (!options.gitProvider) {
		const { status, data, messages } = await fetchApi<IGitProvider>({
			url: `/api/v1/git`,
		});
		if (!status) return logError(messages);

		const gitProviders = data as IGitProvider[];

		const choices = gitProviders.map((g) => {
			return { name: g.name, value: g };
		});

		const { gitProvider } = await inquirer.prompt({
			type: "list",
			name: "gitProvider",
			message: "Git provider:",
			choices: choices,
		});

		currentGitProvider = gitProvider;
		options.gitProvider = gitProvider.slug;

		// set this git provider to default:
		saveCliConfig({ currentGitProvider });
	} else {
		// search for this git provider
		const { status, data, messages } = await fetchApi<IGitProvider>({
			url: `/api/v1/git?slug=${options.gitProvider}`,
		});
		if (!status) return logError(messages);
		currentGitProvider = data[0] as IGitProvider;

		// set this git provider to default:
		saveCliConfig({ currentGitProvider });
	}

	return options;
}
