import axiosInstance from "../config/axios";

async function fetchKpiData() {
  const response = await axiosInstance.get("/data/kpi");
  return response.data;
}

export default fetchKpiData;
