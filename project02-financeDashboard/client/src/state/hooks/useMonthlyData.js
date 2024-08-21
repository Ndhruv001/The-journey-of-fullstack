import { useQuery } from "@tanstack/react-query";
import fetchMonthlyData from "../api/monthlyDataApi";

function useMonthlyData() {
  return useQuery({
    queryKey: ["monthly-data"],
    queryFn: fetchMonthlyData,
  });
}

export default useMonthlyData;
