/* eslint-disable react/prop-types */
import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useSnackbar } from '../../hooks';
import {
    handleTypeAlert,
    handleMessage,
    handleClose,
} from './snackbarHandlers';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const CustomizedSnackbar = ({
    props: { isError, isSuccess, err, data },
}) => {
    const { open, setOpen } = useSnackbar(isSuccess, isError);
    return (
        <>
            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                <Alert
                    onClose={handleClose.bind(null, setOpen)}
                    severity={handleTypeAlert(isError, isSuccess)}
                >
                    {handleMessage(isError, isSuccess, err, data)}
                </Alert>
            </Snackbar>
        </>
    );
};
