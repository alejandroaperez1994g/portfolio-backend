import express from 'express';
import {router as projectRoutes} from './adapters/express/routes/projectRoutes';
import {skillRouter} from "./adapters/express/routes/skillRoutes";
import {journeyRoutes} from "./adapters/express/routes/journeyRoutes";
import {healthRouter} from "./health/healthRouter";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(cors())

app.use("/health", healthRouter)

app.use("/", (req, res) => {
    res.status(200).send("Alejandro Portfolio Backend")
})

app.use('/api/projects', projectRoutes);
app.use("/api/skills", skillRouter)
app.use("/api/journeys", journeyRoutes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
