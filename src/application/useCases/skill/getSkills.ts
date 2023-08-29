import {SkillRepository} from "../../../domain/models/skill-repository";

export class GetSkills {
    constructor(private readonly skillRepository: SkillRepository) {
    }

    async run() {
        try {

            return await this.skillRepository.getSkills();

        } catch (e: unknown) {
            if (e instanceof Error) {
                const errorMessage = e.message;
                throw new Error(`Error obtaining skills: ${errorMessage}`);
            } else {
                throw new Error('An unexpected error occurred.');
            }
        }
    }

}
