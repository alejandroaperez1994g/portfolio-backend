import {Skill} from "./skill";

export interface SkillRepository {
    getSkills(): Promise<Skill[]>

    getSkillByID(id: string): Promise<Skill | null>

    createSkill(skill: Skill): Promise<Skill | null>

    deleteSkill(id: string): Promise<Skill | null>
}
