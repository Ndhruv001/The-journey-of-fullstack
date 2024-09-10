import express from "express";
import cors from "cors";
import helmet from "helmet";
import config from "../config/config.js";

const app = express();

const corsOptions = {
  origin: config.frontendOrigin, 
  credentials: true,
};

app.use(cors(corsOptions));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// ROUTES
import doctorRoutes from "./routes/doctor/doctorRoutes.js";
import patientRoutes from "./routes/patient/patientRoutes.js";
import loginRoutes from "./routes/loginRoutes.js";

app.use(`${config.baseURL}/${config.apiVersion}/user`, loginRoutes);
app.use(`${config.baseURL}/${config.apiVersion}/doctor`, doctorRoutes);
app.use(`${config.baseURL}/${config.apiVersion}/patient`, patientRoutes);
// app.use('api/v1/admin')

export default app;
