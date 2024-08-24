import fetchDailySales from '../api/fetchDailySales';
import { useQuery } from '@tanstack/react-query';

function useGetDailySales(){
    return useQuery({
        queryKey: ["customer-details"],
        queryFn: fetchDailySales,
        select: (data) => data.data.data,
    });
}

export default useGetDailySales;