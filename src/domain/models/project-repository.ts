import {Project} from "./project";

export interface ProjectRepository {
    getProjectByID(id: string): Promise<Project | null>

    getProjects(): Promise<Project[]>

    createProject(project: Project): Promise<Project | null>

    deleteProject(id: string): Promise<Project | null>
}
