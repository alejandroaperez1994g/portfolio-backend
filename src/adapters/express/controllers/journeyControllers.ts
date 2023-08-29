import {CreateJourney} from "../../../application/useCases/journey/createJourney";
import {GetJourney} from "../../../application/useCases/journey/getJourney";
import {GetAllJourneys} from "../../../application/useCases/journey/getAllJourneys";
import {DeleteJourney} from "../../../application/useCases/journey/deleteJourney";
import {Request, Response} from "express";

export class JourneyControllers {
    constructor(private readonly createJourney: CreateJourney, private readonly getJourneyById: GetJourney,
                private readonly getJourneys: GetAllJourneys, private readonly deleteJourney: DeleteJourney) {
    }

    async createNewJourney(req: Request, res: Response) {
        try {
            const newJourney = await this.createJourney.run(req.body);

            res.status(200).json(newJourney);

        } catch (e) {
            throw new Error("Error creating journey")
        }
    }

    async getJourney(req: Request, res: Response) {
        try {
            const journey = await this.getJourneyById.run(req.params.id);

            res.status(200).json(journey);

        } catch (e) {
            throw new Error("Error getting journey")
        }
    }

    async getAllJourneys(req: Request, res: Response) {
        try {
            const journeys = await this.getJourneys.run();

            res.status(200).json(journeys);

        } catch (e) {
            throw new Error("Error getting journeys")
        }
    }

    async deleteJourneyByID(req: Request, res: Response) {
        try {
            const journey = await this.deleteJourney.run(req.params.id);

            res.status(204).json();

        } catch (e) {
            throw new Error("Error deleting journey")
        }
    }

}
