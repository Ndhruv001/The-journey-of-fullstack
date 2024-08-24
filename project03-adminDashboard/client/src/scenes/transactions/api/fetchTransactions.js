import axiosInstance from '@/lib/axiosInstance';

async function fetchTransactions(){
    return await axiosInstance.get('/client/transactions');
}

export default fetchTransactions;