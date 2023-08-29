import {Router} from "express";
import {skillController} from "../dependencies";

export const skillRouter = Router();

skillRouter
    .get("/:id", skillController.getSkillByID.bind(skillController))
    .get("/", skillController.getAllSkills.bind(skillController))
    .post("/", skillController.createNewSkill.bind(skillController))
    .delete("/:id", skillController.deleteSkillByID.bind(skillController))
