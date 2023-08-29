// application/useCases/createSkill.ts
import {Project} from '../../../domain/models/project';
import {ProjectRepository} from "../../../domain/models/project-repository";


export class CreateProject {
    constructor(private readonly projectRepository: ProjectRepository) {
    }

    async run(project: Project) {
        try {

            const projectCreated = await this.projectRepository.createProject(project)

            if (!projectCreated) {
                throw new Error("Project not found");
            }
            return projectCreated;
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
