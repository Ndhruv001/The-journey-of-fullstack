import fetchSalesByCategory from "../api/fetchSalesbyCategory";
import { useQuery } from "@tanstack/react-query";

function useGetSalesByCategory() {
  return useQuery({
    queryKey: ["sale-details", "sales-categories"],
    queryFn: fetchSalesByCategory,
    select: (data) => data.data.data,
  });
}

export default useGetSalesByCategory;
