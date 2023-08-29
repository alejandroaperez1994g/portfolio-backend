import {Router} from 'express';
import {journeyController} from "../dependencies";

export const journeyRoutes = Router();

journeyRoutes
    .post("/", journeyController.createNewJourney.bind(journeyController))
    .get("/:id", journeyController.getJourney.bind(journeyController))
    .get("/", journeyController.getAllJourneys.bind(journeyController))
    .delete("/:id", journeyController.deleteJourneyByID.bind(journeyController))
