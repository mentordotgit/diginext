import express from "express";

import ClusterController from "@/controllers/ClusterController";
import { authenticate } from "@/middlewares/authenticate";
import { authorize } from "@/middlewares/authorize";
import { processApiRequest } from "@/middlewares/process-api-request";
import { registerController } from "@/middlewares/register-controller";

const router = express.Router();

const controller = new ClusterController();

router
	.use(authenticate, authorize)
	.use(registerController(controller))
	.get("/", processApiRequest(controller.read.bind(controller)))
	.get("/connect", processApiRequest(controller.connect.bind(controller)))
	.get("/verify", processApiRequest(controller.verify.bind(controller)))
	.post("/", processApiRequest(controller.create.bind(controller)))
	.patch("/", processApiRequest(controller.update.bind(controller)))
	.delete("/", processApiRequest(controller.delete.bind(controller)));
// .delete("/empty", processApiRequest(controller.empty.bind(controller)));

export default router;
