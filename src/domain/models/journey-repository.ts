import {Journey} from "./journey";

export interface JourneyRepository {

    getJourney(): Promise<Journey[]>

    getJourneyByID(id: string): Promise<Journey | null>

    createJourney(journey: Journey): Promise<Journey | null>

    deleteJourney(id: string): Promise<Journey | null>

}
