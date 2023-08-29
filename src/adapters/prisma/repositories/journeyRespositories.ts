import {PrismaClient} from "@prisma/client";
import {Journey} from "../../../domain/models/journey";
import {JourneyRepository} from "../../../domain/models/journey-repository";

export class PrismaJourneyRespositories implements JourneyRepository {
    constructor(private prisma: PrismaClient) {
    }

    async createJourney(journey: Journey): Promise<Journey | null> {
        try {
            return await this.prisma.journey.create({
                data: {
                    date_text: journey.date_text,
                    experiences: {
                        create: journey.experiences
                    },
                    last: journey.last
                },
                include: {
                    experiences: true
                }
            })
            
        } catch (e) {
            throw new Error("Error creating journey")
        }
    }

    async deleteJourney(id: string): Promise<Journey | null> {
        try {
            return await this.prisma.journey.delete({
                where: {
                    id: id
                }, include: {
                    experiences: true
                }
            })
        } catch (e) {
            throw new Error("Error deleting journey")
        }
    }

    async getJourney(): Promise<Journey[]> {
        try {
            return await this.prisma.journey.findMany({
                include: {
                    experiences: true
                }
            })
        } catch (e) {
            throw new Error("Error getting journeys")
        }
    }

    getJourneyByID(id: string): Promise<Journey | null> {
        try {
            return this.prisma.journey.findUnique({
                where: {
                    id: id
                }, include: {
                    experiences: true
                }
            })

        } catch (e) {
            throw new Error("Error getting journey")
        }
    }


}
