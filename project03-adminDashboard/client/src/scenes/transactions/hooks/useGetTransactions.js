import fetchTransactions from '../api/fetchTransactions';
import { useQuery } from '@tanstack/react-query';

function useGetTransactions(){
    return useQuery({
        queryKey: ["transaction-details"],
        queryFn: fetchTransactions,
        select: (data) => data.data.data,
    });
}

export default useGetTransactions;