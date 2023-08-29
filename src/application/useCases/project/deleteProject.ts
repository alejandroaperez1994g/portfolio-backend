import {ProjectRepository} from "../../../domain/models/project-repository";

export class DeleteProject {
    constructor(private readonly projectRepository: ProjectRepository) {
    }

    async run(id: string) {
        try {

            const projectToDelete = await this.projectRepository.deleteProject(id)

            if (!projectToDelete) {
                throw new Error("Project not found");
            }
            return projectToDelete;
        } catch (e: unknown) {
            if (e instanceof Error) {
                const errorMessage = e.message;
                throw new Error(`Error creating project: ${errorMessage}`);
            } else {
                throw new Error('An unexpected error occurred.');
            }
        }
    }
}
