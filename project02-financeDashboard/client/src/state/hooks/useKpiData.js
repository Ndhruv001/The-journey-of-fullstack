import { useQuery } from "@tanstack/react-query";
import fetchKpiData from "../api/kpiApi";

function useKpiData() {
  return useQuery({
    queryKey: ["kpi"],
    queryFn: fetchKpiData,
  });
}

export default useKpiData;
