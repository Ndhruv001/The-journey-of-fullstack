import { useQuery } from "@tanstack/react-query";
import fetcDailyData from "../api/dailyDataApi";

function useDailyData() {
  return useQuery({
    queryKey: ["daily-data"],
    queryFn: fetcDailyData,
  });
}

export default useDailyData;
