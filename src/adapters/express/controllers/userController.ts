import {Request,Response} from "express";
import {WelcomeEmailSender} from "../../../application/WelcomeEmailSender";

export class UserController{
    constructor(private readonly welcomeEmailSender: WelcomeEmailSender){

    }

    async sendEmail(req:Request,res:Response){
        const {userID} = req.params;
        try{
            await this.welcomeEmailSender.run(userID);

            res.status(200).json();
        }catch(error){
            res.status(500).json({error:"Error al crear el usuario"});
        }
    }
}
