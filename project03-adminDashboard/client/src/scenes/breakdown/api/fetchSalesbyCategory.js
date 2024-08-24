import axiosInstance from '@/lib/axiosInstance';

async function fetchSalesByCategory(){
    return await axiosInstance.get('/sales/breakdown');
}

export default fetchSalesByCategory;