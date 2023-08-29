import {JourneyRepository} from "../../../domain/models/journey-repository";
import {Journey} from "../../../domain/models/journey";

export class CreateJourney {
    constructor(private journeyRepository: JourneyRepository) {
    }

    async run(journey: Journey): Promise<Journey | null> {
        try {

            return await this.journeyRepository.createJourney(journey)
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
