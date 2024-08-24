import axiosInstance from '@/lib/axiosInstance';

async function fetchDailySales(){
    return await axiosInstance.get('/sales/overview');
}

export default fetchDailySales;