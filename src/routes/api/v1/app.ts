import express from "express";

import AppController from "@/controllers/AppController";
import { authenticate } from "@/middlewares/authenticate";

const router = express.Router();

const controller = new AppController();

router
	.use(controller.parsePagination.bind(controller))
	.use(controller.parseFilter.bind(controller))
	.use(controller.parseBody.bind(controller))
	/**
	 * GET /api/v1/app
	 * @tags app
	 * @summary Get list of apps
	 * @param {integer} page.query - Current page - 1
	 * @param {integer} size.query - Number of items per page - 50
	 * @param {integer} skip.query - Number of skipped items
	 * @param {integer} limit.query - Number of items per page
	 * @return {ApiResponse} 200 - success response
	 */
	.get(
		"/",
		authenticate,
		// authorize,
		controller.read.bind(controller)
	)
	/**
	 * POST /api/v1/app
	 * @tags app
	 * @summary Create new app
	 * @param {Role} request.body.required
	 * @return {ApiResponse} 200 - success response
	 */
	.post(
		"/",
		authenticate,
		// authorize,
		controller.create.bind(controller)
	)
	/**
	 * PATCH /api/v1/app
	 * @tags app
	 * @summary Update an app
	 * @param {Role} request.body
	 * @return {ApiResponse} 200 - success response
	 */
	.patch(
		"/",
		authenticate,
		// authorize,
		controller.update.bind(controller)
	)
	/**
	 * DELETE /api/v1/app
	 * @tags app
	 * @summary Delete an app
	 * @param {string} id.query.required - Role ID
	 * @return {ApiResponse} 200 - success response
	 */
	.delete(
		"/",
		authenticate,
		// authorize,
		controller.softDelete.bind(controller)
	)
	/**
	 * DELETE /api/v1/app
	 * @tags app
	 * @summary [DANGER] Empty the whole collection
	 * @param {string} pass.query.required - Password for emptying the collection (nguyhiemvcl)
	 * @return {ApiResponse} 200 - success response
	 */
	.delete(
		"/empty",
		authenticate,
		// authorize,
		controller.empty.bind(controller)
	);

export default router;
