import { useEffect } from 'react';

export const useAlertDialog = (isError, isSuccess, setOpen, setValue) => {
    useEffect(() => {
        if (isError || isSuccess) {
            setOpen(false);
            const timerId = setTimeout(() => {
                ['balance', 'address'].map((item) => setValue(item, ''));
            }, 0);

            return () => {
                clearTimeout(timerId);
            };
        }
    }, [isError, isSuccess, setOpen, setValue]);
};
