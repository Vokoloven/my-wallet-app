/* eslint-disable react/prop-types */

import React, { useEffect, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const CustomizedSnackbar = ({ props: { isError, isSuccess } }) => {
    const [open, setOpen] = useState(false);

    const handleTypeAlert = (isError, isSuccess) => {
        if (isSuccess) return 'success';
        if (isError) return 'error';
    };

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
                    This is a error message!
                </Alert>
            </Snackbar>
        </>
    );
};
