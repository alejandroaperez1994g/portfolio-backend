import {JourneyRepository} from "../../../domain/models/journey-repository";
import {Journey} from "../../../domain/models/journey";

export class GetJourney {
    constructor(private journeyRepository: JourneyRepository) {
    }

    async run(id: string): Promise<Journey | null> {
        try {
            const journey = await this.journeyRepository.getJourneyByID(id)

            if (!journey) {
                throw new Error("Journey not found")
            }

            return journey

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
