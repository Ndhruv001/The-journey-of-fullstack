import axiosInstance from "@/lib/axiosInstance";

async function fetchProducts() {
  return await axiosInstance.get("/client/products");
}

export default fetchProducts;
