import { useAccount, useBalance } from 'wagmi';

export const useFetchData = () => {
    const { address, isConnected } = useAccount();

    const { data } = useBalance({
        address,
    });

   
    return { address, data, isConnected };
};
