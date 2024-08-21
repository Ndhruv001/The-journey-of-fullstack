import axiosInstance from "../config/axios";

async function fetchDailyData() {
  const response = await axiosInstance.get("/data/daily-data");
  return response.data;
}

export default fetchDailyData;
