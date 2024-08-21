import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

//ROUTES
import dataRoutes from "./routes/dataRoute.js";
app.use("/data", dataRoutes);

export default app;
