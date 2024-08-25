import { useQuery } from "@tanstack/react-query";
import fetchProducts from "../api/fetchProducts";

function useGetProducts() {
  return useQuery({
    queryKey: ["product-details"],
    queryFn: fetchProducts,
    select: (data) => data.data.data,
  });
}

export default useGetProducts;
