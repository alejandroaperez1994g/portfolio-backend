import {Router} from 'express';
import {projectController} from "../dependencies";

const router = Router();

router
    .get("/:id", projectController.getProjectById.bind(projectController))
    .get("/", projectController.getProjects.bind(projectController))
    .post("/", projectController.createNewProject.bind(projectController))
    .delete("/:id", projectController.deleteProjectById.bind(projectController))

export {router};
