import {Router} from "express";

import {HealthController} from "./healthController";

const healthRouter = Router();

const healthController = new HealthController();

healthRouter.get("/", healthController.run.bind(healthController));

export {healthRouter};
