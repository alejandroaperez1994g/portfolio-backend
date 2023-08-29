// index.ts
import express from 'express';
import {router as projectRoutes} from './adapters/express/routes/projectRoutes';
import {skillRouter} from "./adapters/express/routes/skillRoutes";
import {journeyRoutes} from "./adapters/express/routes/journeyRoutes"; // Ajusta la ubicación de tus rutas

const app = express();
const port = process.env.PORT || 3000;

// Conecta a la base de datos MongoDB utilizando Prisma


// Middleware para permitir el análisis de solicitudes JSON
app.use(express.json());

// Rutas para proyectos (ajusta la ruta según tus necesidades)
app.use('/api/projects', projectRoutes);
app.use("/api/skills", skillRouter)
app.use("/api/journeys", journeyRoutes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
