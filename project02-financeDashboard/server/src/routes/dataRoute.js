import express from "express";
import {
  kpiData,
  monthlyData,
  dailyData,
} from "../controllers/dataController.js";

const router = express.Router();

router.get("/kpi", kpiData);
router.get("/monthly-data", monthlyData);
router.get("/daily-data", dailyData);

export default router;
