import {PrismaClient} from "@prisma/client";
import {ProjectRepository} from "../../../domain/models/project-repository";
import {Project} from "../../../domain/models/project";

export class PrismaProjectRepository implements ProjectRepository {
    constructor(private prisma: PrismaClient) {
    }

    async createProject(project: Project): Promise<Project | null> {
        try {
            return await this.prisma.project.create({
                data: project
            })

        } catch (e) {
            throw new Error("Error creating project")
        }
    }

    async getProjectByID(id: string): Promise<Project | null> {
        try {
            const project = await this.prisma.project.findUnique({
                where: {
                    id: id
                }
            })

            return project;
        } catch (e) {
            throw new Error("Error obtaining project")
        }
    }

    async deleteProject(id: string): Promise<Project | null> {
        try {
            return await this.prisma.project.delete({
                where: {
                    id: id
                }
            })

        } catch (e) {
            throw new Error("Error al obtener el proyecto")
        }
    }

    getProjects(): Promise<Project[]> {
        try {
            return this.prisma.project.findMany()
        } catch (e) {
            throw new Error("Error obtaining projects")
        }
    }

}

export {ProjectRepository};
