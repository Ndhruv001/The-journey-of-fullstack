import fetchCustomers from '../api/fetchCustomers';
import { useQuery } from '@tanstack/react-query';

function useGetCustomers(){
    return useQuery({
        queryKey: ["customer-details"],
        queryFn: fetchCustomers,
        select: (data) => data.data.data,
    });
}

export default useGetCustomers;