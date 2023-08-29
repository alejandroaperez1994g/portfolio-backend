import {SkillRepository} from "../../../domain/models/skill-repository";

export class GetSkillByID {
    constructor(private readonly skillRepository: SkillRepository) {
    }

    async run(id: string) {
        try {

            return await this.skillRepository.getSkillByID(id);

        } catch (e: unknown) {
            if (e instanceof Error) {
                const errorMessage = e.message;
                throw new Error(`Error obtaining skill: ${errorMessage}`);
            } else {
                throw new Error('An unexpected error occurred.');
            }
        }
    }
}
