import pool from "../db/connectDB.js";

async function getKpiData() {
  try {
    const [kpi] = await pool.execute("select * from KPI");
    return kpi;
  } catch (error) {
    console.log("Database error while fetching kpi data: ", error);
    throw new Error("Database error while fetching kpi data");
  }
}

async function getMonthlyData() {
  try {
    const [monthly] = await pool.execute("select * from MonthlyData");
    return monthly;
  } catch (error) {
    console.log("Database error while fetching monthly data: ", error);
    throw new Error("Database error while fetching monthly data");
  }
}

async function getDailyData() {
  try {
    const [daily] = await pool.execute("select * from DailyData");
    return daily;
  } catch (error) {
    console.log("Database error while fetching daily data: ", error);
    throw new Error("Database error while fetching daily data");
  }
}

export { getDailyData, getMonthlyData, getKpiData };
