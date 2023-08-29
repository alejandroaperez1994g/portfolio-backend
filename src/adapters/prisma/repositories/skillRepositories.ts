import {SkillRepository} from "../../../domain/models/skill-repository";
import {Skill} from "../../../domain/models/skill";
import {PrismaClient} from "@prisma/client";

export class SkillPrismaRepositories implements SkillRepository {
    constructor(private prisma: PrismaClient) {
    }

    async createSkill(skill: Skill): Promise<Skill | null> {
        try {
            return await this.prisma.skill.create({
                data: skill
            })

        } catch (e) {
            throw new Error("Error creating skill")
        }
    }

    async deleteSkill(id: string): Promise<Skill | null> {
        try {
            return this.prisma.skill.delete({
                where: {
                    id: id
                }
            })

        } catch (e) {
            throw new Error("Error deleting skill")
        }
    }

    async getSkillByID(id: string): Promise<Skill | null> {
        try {
            return await this.prisma.skill.findUnique({
                where: {
                    id: id
                }
            })

        } catch (e) {
            throw new Error("Error obtaining skill")
        }
    }

    async getSkills(): Promise<Skill[]> {
        try {
            return await this.prisma.skill.findMany()
        } catch (e) {
            throw new Error("Error obtaining skills")
        }
    }

}
