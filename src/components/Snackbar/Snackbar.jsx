/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { handleTypeAlert, handleMessage } from './snackbarHandlers';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const CustomizedSnackbar = ({
    props: { isError, isSuccess, err, data },
}) => {
    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    useEffect(() => {
        if (isSuccess || isError) {
            setOpen(true);
        }
        return () => {};
    }, [isError, isSuccess]);

    return (
        <>
            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity={handleTypeAlert(isError, isSuccess)}
                >
                    {handleMessage(isError, isSuccess, err, data)}
                </Alert>
            </Snackbar>
        </>
    );
};
