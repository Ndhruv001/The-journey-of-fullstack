import axios from "axios";
import config from '@/lib/config';

const axiosInstance = axios.create({
    baseURL: config.baseURL,
    headers: {
        "Content-Type": "application/json"
    }
});

export default axiosInstance;