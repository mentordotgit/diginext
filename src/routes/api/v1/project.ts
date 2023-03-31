import express from "express";

import ProjectController from "@/controllers/ProjectController";
import { authenticate } from "@/middlewares/authenticate";
import { authorize } from "@/middlewares/authorize";

const router = express.Router();

const controller = new ProjectController();

router
	.use(authenticate, authorize)
	.use(controller.parsePagination.bind(controller))
	.use(controller.parseFilter.bind(controller))
	.use(controller.parseBody.bind(controller))
	.get("/", controller.apiRespond(controller.read.bind(controller)))
	.get("/with-apps", controller.apiRespond(controller.getProjectsAndApps.bind(controller)))
	.post("/", controller.apiRespond(controller.create.bind(controller)))
	.patch("/", controller.apiRespond(controller.update.bind(controller)))
	.delete("/", controller.apiRespond(controller.softDelete.bind(controller)))
	.delete("/empty", controller.apiRespond(controller.empty.bind(controller)));

export default router;
