import axiosInstance from "../config/axios";

async function fetchMonthlyData() {
  const response = await axiosInstance.get("/data/monthly-data");
  return response.data;
}

export default fetchMonthlyData;
