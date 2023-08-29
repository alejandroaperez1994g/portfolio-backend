import {JourneyRepository} from "../../../domain/models/journey-repository";
import {Journey} from "../../../domain/models/journey";

export class GetAllJourneys {
    constructor(private journeyRepository: JourneyRepository) {
    }

    async run(): Promise<Journey[]> {
        try {
            return await this.journeyRepository.getJourney()
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
