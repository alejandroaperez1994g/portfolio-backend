import {ProjectRepository} from "../../../domain/models/project-repository";

export class GetAllProjects {
    constructor(private readonly projectRepository: ProjectRepository) {
    }

    async run() {
        return await this.projectRepository.getProjects()
        
    }
}
