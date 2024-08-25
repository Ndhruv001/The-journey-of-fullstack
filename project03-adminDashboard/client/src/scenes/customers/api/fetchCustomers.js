import axiosInstance from "@/lib/axiosInstance";

async function fetchCustomers() {
  return await axiosInstance.get("/client/customers");
}

export default fetchCustomers;
