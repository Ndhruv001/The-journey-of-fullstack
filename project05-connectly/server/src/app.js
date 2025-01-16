import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import config from "../config/config.js";

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(helmet());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// ROUTES
import userRoutes from "../src/routes/userRoutes.js";
import messageRoutes from "../src/routes/messageRoutes.js";

app.use(`${config.baseURL}/${config.apiVersion}/user`, userRoutes);
app.use(`${config.baseURL}/${config.apiVersion}/user`, messageRoutes);

export default app;
