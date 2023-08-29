// adapters/express/controllers/projectController.ts
import {Request, Response} from 'express';
import {GetProject} from "../../../application/useCases/project/getProject";
import {CreateProject} from "../../../application/useCases/project/createProject";
import {DeleteProject} from "../../../application/useCases/project/deleteProject";
import {GetAllProjects} from "../../../application/useCases/project/getAllProjects";

class ProjectController {
    constructor(private getProject: GetProject, private createProject: CreateProject,
                private deleteProject: DeleteProject, private getAllProjects: GetAllProjects) {
    }

    async getProjectById(req: Request, res: Response) {
        try {

            const project = await this.getProject.run(req.params.id);

            res.status(200).json(project);
        } catch (e) {
            throw new Error("Error obtaining project")
        }
    }

    async createNewProject(req: Request, res: Response) {
        try {
            const newProject = await this.createProject.run(req.body);

            res.status(200).json(newProject);
        } catch (e) {
            throw new Error("Error al crear el proyecto")
        }
    }

    async deleteProjectById(req: Request, res: Response) {
        try {
            const newProject = await this.deleteProject.run(req.params.id);

            res.status(200).json(newProject);
        } catch (e) {
            throw new Error("Error deleting project")
        }
    }

    async getProjects(req: Request, res: Response) {
        try {
            const projects = await this.getAllProjects.run()

            res.status(200).json(projects);
        } catch (e) {
            throw new Error("Error obtaining projects")
        }
    }
}


export {ProjectController};
