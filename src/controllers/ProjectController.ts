import { Body, Delete, Get, Patch, Post, Queries, Route, Security, Tags } from "tsoa/dist";

import type { IProject } from "@/entities";
import * as entities from "@/entities";
import * as interfaces from "@/interfaces";
import type { ResponseData } from "@/interfaces/ResponseData";
import { respondFailure, respondSuccess } from "@/interfaces/ResponseData";
import { checkQuota } from "@/modules/workspace/check-quota";
import { MongoDB } from "@/plugins/mongodb";
import { AppService, ProjectService } from "@/services";

import BaseController from "./BaseController";

interface IQueryProjectsAndApps {
	/**
	 * Should check for item's status
	 * @default false
	 */
	status?: boolean;
	/**
	 * Find one item by `{ObjectID}`
	 */
	id?: string;
	_id?: string;
	/**
	 * Mark this request as search (return the similar results based on the filter query params)
	 * @default true
	 */
	search?: boolean;
	/**
	 * Pagination
	 */
	page?: number;
	size?: number;
	limit?: number;
	skip?: number;
}

@Tags("Project")
@Route("project")
export default class ProjectController extends BaseController {
	service: ProjectService;

	constructor() {
		super(new ProjectService());
	}

	/**
	 * List of projects
	 */
	@Security("api_key")
	@Security("jwt")
	@Get("/")
	read(@Queries() queryParams?: interfaces.IGetQueryParams) {
		return super.read();
	}

	@Security("api_key")
	@Security("jwt")
	@Post("/")
	async create(@Body() body: entities.ProjectDto, @Queries() queryParams?: interfaces.IPostQueryParams) {
		// check dx quota
		const quotaRes = await checkQuota(this.workspace);
		if (!quotaRes.status) return respondFailure(quotaRes.messages.join(". "));
		if (quotaRes.data && quotaRes.data.isExceed)
			return respondFailure(
				`You've exceeded the limit amount of projects (${quotaRes.data.type} / Max. ${quotaRes.data.limits.projects} projects).`
			);

		return super.create(body);
	}

	@Security("api_key")
	@Security("jwt")
	@Patch("/")
	update(@Body() body: entities.ProjectDto, @Queries() queryParams?: interfaces.IPostQueryParams) {
		return super.update(body);
	}

	@Security("api_key")
	@Security("jwt")
	@Delete("/")
	async softDelete(@Queries() queryParams?: interfaces.IDeleteQueryParams) {
		// console.log("filter :>> ", this.filter);
		const result = await this.service.softDelete(this.filter);
		// console.log("result :>> ", result);

		return result.ok
			? respondSuccess({ data: result })
			: respondFailure(this.filter.owner ? `You don't have permissions to delete this project.` : `Unable to delete this project.`);
	}

	@Security("api_key")
	@Security("jwt")
	@Get("/with-apps")
	async getProjectsAndApps(@Queries() queryParams?: IQueryProjectsAndApps) {
		const shouldGetAppStatus = this.filter.status;
		delete this.filter.status;

		let projects = await this.service.find(this.filter, { ...this.options }, this.pagination);

		let result: ResponseData & { data: IProject[] } = { status: 1, data: [], messages: [] };
		if (this.pagination) result = { ...result, ...this.pagination };

		// populate apps
		const projectIDs = projects.map((pro) => pro._id);
		const appSvc = new AppService();
		let apps = await appSvc.find({ project: { $in: projectIDs }, deletedAt: { $exists: false } }, { status: shouldGetAppStatus }, this.options);
		// console.log("apps :>> ", apps);

		result.data = projects.map((project) => {
			const projectWithApps = { ...project };
			projectWithApps.apps = apps.filter((app) => MongoDB.toString(app.project) === MongoDB.toString(project._id));
			return projectWithApps;
		});

		return result;
	}
}
