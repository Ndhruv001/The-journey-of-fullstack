import {
  getDailyData,
  getMonthlyData,
  getKpiData,
} from "../queries/dataQueries.js";

async function kpiData(req, res) {
  try {
    const kpi = await getKpiData();
    return res.status(200).json({ success: true, data: kpi });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
}

async function monthlyData(req, res) {
  try {
    const monthly = await getMonthlyData();
    return res.status(200).json({ success: true, data: monthly });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
}

async function dailyData(req, res) {
  try {
    const daily = await getDailyData();
    return res.status(200).json({ success: true, data: daily });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
}

export { kpiData, monthlyData, dailyData };
