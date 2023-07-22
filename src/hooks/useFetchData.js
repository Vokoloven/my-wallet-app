import { useAccount, useBalance } from 'wagmi';

export const useFetchData = () => {
    const { address, isConnected } = useAccount();

    const { data } = useBalance({
        address: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
    });

    return { address, data, isConnected };
};
