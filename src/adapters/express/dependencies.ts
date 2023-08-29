import {GetProject} from "../../application/useCases/project/getProject";
import {ProjectController} from "./controllers/projectControllers";
import {PrismaProjectRepository} from "../prisma/repositories/projectRepositories";
import {PrismaClient} from "@prisma/client";
import {CreateProject} from "../../application/useCases/project/createProject";
import {DeleteProject} from "../../application/useCases/project/deleteProject";
import {GetAllProjects} from "../../application/useCases/project/getAllProjects";
import {SkillPrismaRepositories} from "../prisma/repositories/skillRepositories";
import {SkillControllers} from "./controllers/skillControllers";
import {CreateSkill} from "../../application/useCases/skill/createSkill";
import {DeleteSkill} from "../../application/useCases/skill/deleteSkill";
import {GetSkillByID} from "../../application/useCases/skill/getSkillByID";
import {GetSkills} from "../../application/useCases/skill/getSkills";
import {PrismaJourneyRespositories} from "../prisma/repositories/journeyRespositories";
import {CreateJourney} from "../../application/useCases/journey/createJourney";
import {GetJourney} from "../../application/useCases/journey/getJourney";
import {GetAllJourneys} from "../../application/useCases/journey/getAllJourneys";
import {DeleteJourney} from "../../application/useCases/journey/deleteJourney";
import {JourneyControllers} from "./controllers/journeyControllers";

export const prisma = new PrismaClient();


export const prismaProjectRepository = new PrismaProjectRepository(prisma);
export const getProject = new GetProject(prismaProjectRepository);
export const deleteProject = new DeleteProject(prismaProjectRepository)
export const createProject = new CreateProject(prismaProjectRepository)
export const getProjects = new GetAllProjects(prismaProjectRepository)
export const projectController = new ProjectController(getProject, createProject, deleteProject, getProjects);


export const prismaSkillRepository = new SkillPrismaRepositories(prisma)
export const createSkill = new CreateSkill(prismaSkillRepository)
export const deleteSkill = new DeleteSkill(prismaSkillRepository)
export const getSkillById = new GetSkillByID(prismaSkillRepository)
export const getSkills = new GetSkills(prismaSkillRepository)
export const skillController = new SkillControllers(createSkill, getSkillById, getSkills, deleteSkill)


export const prismaJourneyRepository = new PrismaJourneyRespositories(prisma)
export const createJourney = new CreateJourney(prismaJourneyRepository)
export const getJourneyById = new GetJourney(prismaJourneyRepository)
export const getAllJourneys = new GetAllJourneys(prismaJourneyRepository)
export const deleteJourney = new DeleteJourney(prismaJourneyRepository)
export const journeyController = new JourneyControllers(createJourney, getJourneyById, getAllJourneys, deleteJourney)
