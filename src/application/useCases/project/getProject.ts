import {ProjectRepository} from "../../../domain/models/project-repository";

export class GetProject {
    constructor(private readonly projectRepository: ProjectRepository) {
    }

    async run(id: string) {
        const project = await this.projectRepository.getProjectByID(id)

        if (!project) {
            throw new Error("Project not found");
        }

        console.log(`Getting project with id: ${id}`);
        return project;
    }
}
