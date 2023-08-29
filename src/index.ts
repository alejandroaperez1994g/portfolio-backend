import express, {Request, Response} from 'express';
import {router as projectRoutes} from './adapters/express/routes/projectRoutes';
import {skillRouter} from "./adapters/express/routes/skillRoutes";
import {journeyRoutes} from "./adapters/express/routes/journeyRoutes";
import {healthRouter} from "./health/healthRouter";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;


app.use(cors())
app.use(express.json());

app.use("/health", healthRouter)

app.get("/", (req: Request, res: Response) => {
    res.status(200).send("Alejandro´s Portfolio Backend")
})

app.use('/api/projects', projectRoutes);
app.use("/api/skills", skillRouter)
app.use("/api/journeys", journeyRoutes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
