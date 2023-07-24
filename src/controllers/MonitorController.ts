import type { NextFunction } from "express-serve-static-core";
import { isEmpty } from "lodash";
import { Body, Delete, Get, Post, Queries, Route, Security, Tags } from "tsoa/dist";

import type { IUser, IWorkspace } from "@/entities";
import type { IResponsePagination, KubeService } from "@/interfaces";
import { respondFailure, respondSuccess } from "@/interfaces";
import type { KubeNode } from "@/interfaces/KubeNode";
import type { MonitoringQueryFilter } from "@/interfaces/MonitoringQuery";
import { MonitoringQueryOptions, MonitoringQueryParams } from "@/interfaces/MonitoringQuery";
import type { AppRequest, Ownership } from "@/interfaces/SystemTypes";
import ClusterManager from "@/modules/k8s";
import { MongoDB } from "@/plugins/mongodb";
import { parseRequestFilter } from "@/plugins/parse-request-filter";
import { MonitorService } from "@/services/MonitorService";

@Tags("Monitor")
@Route("monitor")
export default class MonitorController {
	user: IUser;

	workspace: IWorkspace;

	ownership: Ownership;

	service = new MonitorService();

	filter: MonitoringQueryFilter;

	options: MonitoringQueryOptions;

	pagination: IResponsePagination;

	/**
	 * Parse the filter & option from the URL
	 */
	parseFilter(req: AppRequest, res?, next?: NextFunction) {
		const {
			sort, // @example: -updatedAt,-createdAt
			order, // @example: -updatedAt,-createdAt
			search = false,
			output,
			isDebugging = false,
			access_token,
			...filter
		} = req.query as any;

		const options: MonitoringQueryOptions = {
			isDebugging,
			output: "json",
		};

		// parse "search"
		// if (search === true) {
		// 	Object.entries(filter).forEach(([key, val]) => {
		// 		filter[key] =
		// 			isString(val) &&
		// 			!isValidObjectId(val) &&
		// 			!isBoolean(val) &&
		// 			!isDate(val) &&
		// 			!isNumber(val) &&
		// 			!isBooleanString(val) &&
		// 			!isNumberString(val)
		// 				? { $regex: trim(val), $options: "i" }
		// 				: val;
		// 	});
		// }

		// parse "sort" (or "order") from the query url:
		let _sortOptions: string[];
		if (sort) _sortOptions = sort.indexOf(",") > -1 ? sort.split(",") : [sort];
		if (order) _sortOptions = order.indexOf(",") > -1 ? order.split(",") : [order];
		const sortOptions: Record<string, 1 | -1> = {};
		if (_sortOptions)
			_sortOptions.forEach((s) => {
				const isDesc = s.charAt(0) === "-";
				const key = isDesc ? s.substring(1) : s;
				const sortValue: 1 | -1 = isDesc ? -1 : 1;
				sortOptions[key] = sortValue;
			});
		if (!isEmpty(sortOptions)) options.order = sortOptions;

		// parse "pagination"
		// if (this.pagination && this.pagination.page_size) {
		// 	options.skip = ((this.pagination.current_page ?? 1) - 1) * this.pagination.page_size;
		// 	options.limit = this.pagination.page_size;
		// }
		// if (limit > 0) options.limit = limit;
		// if (skip) options.skip = skip;

		// assign to controller:
		this.options = options;
		this.filter = parseRequestFilter({ ...filter }) as MonitoringQueryFilter;

		if (next) next();
	}

	/**
	 * List of nodes in a cluster
	 */
	@Security("api_key")
	@Security("jwt")
	@Get("/nodes")
	async getNodes(@Queries() queryParams?: MonitoringQueryParams) {
		const { DB } = await import("@/modules/api/DB");
		let { cluster: clusterSlugOrId } = this.filter;

		let data: KubeNode[] = [];

		if (!clusterSlugOrId) {
			const clusters = await DB.find("cluster", { workspace: this.workspace._id });
			const ls = await Promise.all(
				clusters.map(async (cluster) => {
					const { contextName: context } = cluster;
					if (!context) return [] as KubeNode[];
					let nodeList = await ClusterManager.getAllNodes({ context });
					nodeList = nodeList.map((ns) => {
						ns.workspace = MongoDB.toString(this.workspace._id);
						ns.clusterSlug = cluster.slug;
						ns.cluster = MongoDB.toString(cluster._id);
						return ns;
					});
					return nodeList;
				})
			);
			ls.map((nsList) => nsList.map((ns) => data.push(ns)));
		} else {
			const cluster = await DB.findOne("cluster", {
				$or: [{ slug: clusterSlugOrId }, { _id: clusterSlugOrId }],
				workspace: this.workspace._id,
			});
			if (!cluster) return respondFailure(`Cluster "${clusterSlugOrId}" not found.`);

			const { contextName: context } = cluster;
			if (!context) return respondFailure(`Unverified cluster: "${clusterSlugOrId}"`);

			data = await ClusterManager.getAllNodes({ context });
			data = data.map((ns) => {
				ns.workspace = MongoDB.toString(this.workspace._id);
				ns.clusterSlug = cluster.slug;
				ns.cluster = MongoDB.toString(cluster._id);
				return ns;
			});
		}

		// process
		return respondSuccess({ data });
	}

	/**
	 * List of namespaces in a cluster
	 */
	@Security("api_key")
	@Security("jwt")
	@Get("/namespaces")
	async getNamespaces(@Queries() queryParams?: MonitoringQueryParams) {
		const { MonitorNamespaceService } = await import("@/services/MonitorNamespaceService");
		const nsSvc = new MonitorNamespaceService(this.ownership);
		const data = await nsSvc.find(this.filter, this.options);

		// process
		return respondSuccess({ data });
	}

	/**
	 * Create namespace in a cluster
	 */
	@Security("api_key")
	@Security("jwt")
	@Post("/namespaces")
	async createNamespace(
		@Body()
		body?: {
			/**
			 * Namespace's name
			 */
			name: string;
		},
		@Queries() queryParams?: MonitoringQueryParams
	) {
		const { MonitorNamespaceService } = await import("@/services/MonitorNamespaceService");
		const nsSvc = new MonitorNamespaceService(this.ownership);
		const data = await nsSvc.create(this.filter, body);

		// process
		return respondSuccess({ data });
	}

	/**
	 * Create namespace in a cluster
	 */
	@Security("api_key")
	@Security("jwt")
	@Delete("/namespaces")
	async deleteNamespace(@Body() body?: MonitoringQueryOptions, @Queries() queryParams?: MonitoringQueryParams) {
		const { MonitorNamespaceService } = await import("@/services/MonitorNamespaceService");
		const nsSvc = new MonitorNamespaceService(this.ownership);
		const data = await nsSvc.delete({ ...this.filter, ...body });

		// process
		return respondSuccess({ data });
	}

	/**
	 * List of K8S services
	 */
	@Security("api_key")
	@Security("jwt")
	@Get("/services")
	async getServices(@Queries() queryParams?: MonitoringQueryParams) {
		const { MonitorServiceService } = await import("@/services/MonitorServiceService");
		const serviceSvc = new MonitorServiceService(this.ownership);
		const data = await serviceSvc.find(this.filter, this.options);

		// process
		return respondSuccess({ data });
	}

	/**
	 * Create service in a namespace
	 */
	@Security("api_key")
	@Security("jwt")
	@Post("/services")
	async createService(
		@Body()
		body?: {
			/**
			 * Namespace's name
			 */
			name: string;
			/**
			 * @default "default"
			 */
			namespace?: string;
			/**
			 * Labels
			 */
			labels?: {
				[key: string]: string;
			};
			/**
			 * Spec
			 */
			spec: KubeService["spec"];
		},
		@Queries()
		queryParams?: MonitoringQueryParams
	) {
		const { MonitorServiceService } = await import("@/services/MonitorServiceService");
		const serviceSvc = new MonitorServiceService(this.ownership);
		const data = await serviceSvc.create(this.filter, body);

		return respondSuccess({ data });
	}

	/**
	 * Delete service in a namespace
	 */
	@Security("api_key")
	@Security("jwt")
	@Delete("/services")
	async deleteService(@Body() body?: MonitoringQueryOptions, @Queries() queryParams?: MonitoringQueryParams) {
		const { MonitorServiceService } = await import("@/services/MonitorServiceService");
		const serviceSvc = new MonitorServiceService(this.ownership);
		const data = await serviceSvc.delete({ ...this.filter, ...body });

		return respondSuccess({ data });
	}

	/**
	 * List of K8S Ingress
	 */
	@Security("api_key")
	@Security("jwt")
	@Get("/ingresses")
	async getIngresses(@Queries() queryParams?: MonitoringQueryParams) {
		const { MonitorIngressService } = await import("@/services/MonitorIngressService");
		const ingressSvc = new MonitorIngressService(this.ownership);
		const data = await ingressSvc.find(this.filter, this.options);

		// process
		return respondSuccess({ data });
	}

	/**
	 * Delete K8S Ingress
	 */
	@Security("api_key")
	@Security("jwt")
	@Delete("/ingresses")
	async deleteIngresses(@Body() body?: MonitoringQueryOptions, @Queries() queryParams?: MonitoringQueryParams) {
		const { MonitorIngressService } = await import("@/services/MonitorIngressService");
		const ingressSvc = new MonitorIngressService(this.ownership);
		const data = await ingressSvc.delete({ ...this.filter, ...body });

		// process
		return respondSuccess({ data });
	}

	/**
	 * List of K8S Deployment
	 */
	@Security("api_key")
	@Security("jwt")
	@Get("/deployments")
	async getDeploys(@Queries() queryParams?: MonitoringQueryParams) {
		const { MonitorDeploymentService } = await import("@/services/MonitorDeploymentService");
		const deploymentSvc = new MonitorDeploymentService(this.ownership);
		const data = await deploymentSvc.find(this.filter, this.options);

		// process
		return respondSuccess({ data });
	}

	/**
	 * Delete K8S Deployment
	 */
	@Security("api_key")
	@Security("jwt")
	@Delete("/deployments")
	async deleteDeploys(@Body() body?: MonitoringQueryOptions, @Queries() queryParams?: MonitoringQueryParams) {
		const { MonitorDeploymentService } = await import("@/services/MonitorDeploymentService");
		const deploymentSvc = new MonitorDeploymentService(this.ownership);
		const data = await deploymentSvc.delete({ ...this.filter, ...body });

		// process
		return respondSuccess({ data });
	}

	/**
	 * List of K8S Pod
	 */
	@Security("api_key")
	@Security("jwt")
	@Get("/pods")
	async getPods(@Queries() queryParams?: MonitoringQueryParams) {
		const { MonitorPodService } = await import("@/services/MonitorPodService");
		const podSvc = new MonitorPodService(this.ownership);
		const data = await podSvc.find(this.filter, this.options);

		// process
		return respondSuccess({ data });
	}

	/**
	 * Delete K8S Pod
	 */
	@Security("api_key")
	@Security("jwt")
	@Delete("/pods")
	async deletePods(@Body() body?: MonitoringQueryOptions, @Queries() queryParams?: MonitoringQueryParams) {
		const { MonitorPodService } = await import("@/services/MonitorPodService");
		const podSvc = new MonitorPodService(this.ownership);
		const data = await podSvc.delete({ ...this.filter, ...body });

		// process
		return respondSuccess({ data });
	}

	/**
	 * List of K8S Secret
	 */
	@Security("api_key")
	@Security("jwt")
	@Get("/secrets")
	async getSecrets(@Queries() queryParams?: MonitoringQueryParams) {
		const { MonitorSecretService } = await import("@/services/MonitorSecretService");
		const secretSvc = new MonitorSecretService(this.ownership);
		const data = await secretSvc.find(this.filter, this.options);

		// process
		return respondSuccess({ data });
	}

	/**
	 * Delete K8S Secret
	 */
	@Security("api_key")
	@Security("jwt")
	@Delete("/secrets")
	async deleteSecrets(@Body() body?: MonitoringQueryOptions, @Queries() queryParams?: MonitoringQueryParams) {
		const { MonitorSecretService } = await import("@/services/MonitorSecretService");
		const secretSvc = new MonitorSecretService(this.ownership);
		const data = await secretSvc.delete({ ...this.filter, ...body });

		// process
		return respondSuccess({ data });
	}
}
