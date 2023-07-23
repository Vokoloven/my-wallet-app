export const handleTypeAlert = (isError, isSuccess) => {
    if (isSuccess) return 'success';
    if (isError) return 'error';
};

export const handleMessage = (isError, isSuccess, err, data) => {
    if (isError) return err?.name;
    if (isSuccess) return JSON.stringify(data);
};

export const handleClose = (setOpen, event, reason) => {
    if (reason === 'clickaway') {
        return;
    }

    setOpen(false);
};
