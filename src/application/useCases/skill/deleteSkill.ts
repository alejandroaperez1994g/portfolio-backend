import {SkillRepository} from "../../../domain/models/skill-repository";

export class DeleteSkill {
    constructor(private readonly skillRepository: SkillRepository) {
    }

    async run(id: string) {
        try {

            return await this.skillRepository.deleteSkill(id);

        } catch (e: unknown) {
            if (e instanceof Error) {
                const errorMessage = e.message;
                throw new Error(`Error deleting skill: ${errorMessage}`);
            } else {
                throw new Error('An unexpected error occurred.');
            }
        }
    }

}
