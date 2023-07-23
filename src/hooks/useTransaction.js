import { useSendTransaction } from 'wagmi';
import { parseEther } from 'viem';

export const useTransaction = (transaction) => {
    const { isLoading, sendTransaction, error, isError, isSuccess } =
        useSendTransaction({
            to: transaction.address,
            value: parseEther(transaction.balance),
        });

    return { sendTransaction, isLoading, error, isError, isSuccess };
};
