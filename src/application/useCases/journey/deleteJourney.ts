import {JourneyRepository} from "../../../domain/models/journey-repository";
import {Journey} from "../../../domain/models/journey";

export class DeleteJourney {
    constructor(private journeyRepository: JourneyRepository) {
    }

    async run(id: string): Promise<Journey | null> {
        try {
            return await this.journeyRepository.deleteJourney(id)
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
