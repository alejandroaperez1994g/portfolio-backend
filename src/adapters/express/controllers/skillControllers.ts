import {Request, Response} from "express";
import {CreateSkill} from "../../../application/useCases/skill/createSkill";
import {GetSkillByID} from "../../../application/useCases/skill/getSkillByID";
import {GetSkills} from "../../../application/useCases/skill/getSkills";
import {DeleteSkill} from "../../../application/useCases/skill/deleteSkill";

export class SkillControllers {

    constructor(private createSkill: CreateSkill, private getSkillById: GetSkillByID, private getSkills: GetSkills, private deleteSkill: DeleteSkill) {

    }

    async createNewSkill(req: Request, res: Response) {
        try {

            const createdSkill = await this.createSkill.run(req.body);

            res.status(201).json(createdSkill);

        } catch (e) {
            if (e instanceof Error) {
                const errorMessage = e.message;
                throw new Error(`Error creating project: ${errorMessage}`);
            } else {
                throw new Error('An unexpected error occurred.');
            }
        }
    }

    async getSkillByID(req: Request, res: Response) {
        try {
            const skill = await this.getSkillById.run(req.params.id);

            if (!skill) {
                return res.status(404).json({message: 'Skill not found'});
            }

            res.status(200).json(skill);

        } catch (e) {
            if (e instanceof Error) {
                const errorMessage = e.message;
                throw new Error(`Error creating project: ${errorMessage}`);
            } else {
                throw new Error('An unexpected error occurred.');
            }
        }
    }

    async getAllSkills(req: Request, res: Response) {
        try {
            const skills = await this.getSkills.run();

            res.status(200).json(skills);

        } catch (e) {
            if (e instanceof Error) {
                const errorMessage = e.message;
                throw new Error(`Error creating project: ${errorMessage}`);
            } else {
                throw new Error('An unexpected error occurred.');
            }
        }
    }

    async deleteSkillByID(req: Request, res: Response) {
        try {
            const skill = await this.deleteSkill.run(req.params.id);

            if (!skill) {
                return res.status(404).json({message: 'Skill not found'});
            }

            res.status(204).json();

        } catch (e) {
            if (e instanceof Error) {
                const errorMessage = e.message;
                throw new Error(`Error creating project: ${errorMessage}`);
            } else {
                throw new Error('An unexpected error occurred.');
            }
        }
    }
}
