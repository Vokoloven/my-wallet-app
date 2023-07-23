import { useState, useEffect } from 'react';

export const useSnackbar = (isSuccess, isError) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (isSuccess || isError) {
            setOpen(true);
        }
        return () => {};
    }, [isError, isSuccess]);

    return { open, setOpen };
};
