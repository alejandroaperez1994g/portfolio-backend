import {Skill} from "../../../domain/models/skill";
import {SkillRepository} from "../../../domain/models/skill-repository";


export class CreateSkill {
    constructor(private readonly skillRepository: SkillRepository) {
    }

    async run(skill: Skill) {
        try {

            return await this.skillRepository.createSkill(skill);

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
