import { useState } from 'react';
import { Input } from '../../components/Input';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { sxButtonOutlined } from '../../theme';
import { walletInputs } from '../../components/Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../validation';
import { AlertDialog } from '../AlertDialog/AlertDialog';
import { useFetchData, useTransaction, useAlertDialog } from '../../hooks';
import { MouseOverPopover } from '../Popover';
import { CustomizedSnackbar } from '../Snackbar';
import { onSubmit, onError, handleChange } from './formHandlers';

export const Form = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [error, setError] = useState({});
    const [transaction, setTransaction] = useState({
        address: '',
        balance: '',
    });

    const { address, isConnected } = useFetchData();
    const {
        sendTransaction,
        isLoading,
        error: err,
        isError,
        isSuccess,
        data,
    } = useTransaction(transaction);

    const { register, handleSubmit, setValue } = useForm({
        resolver: yupResolver(schema),
    });

    useAlertDialog(isError, isSuccess, setOpen, setValue);

    return (
        <>
            <Box
                component={'form'}
                onSubmit={handleSubmit(
                    onSubmit.bind(null, setTransaction, setOpen, setError),
                    onError.bind(null, setError)
                )}
                onChange={handleChange.bind(null, setValue)}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {walletInputs.map((input) => (
                    <Input
                        key={input.id}
                        input={input}
                        register={register}
                        error={error}
                    />
                ))}
                <MouseOverPopover
                    props={{
                        anchorEl,
                        setAnchorEl,
                        isConnected,
                    }}
                >
                    <Button
                        disabled={isConnected ? false : true}
                        aria-label="Submit Data"
                        type="submit"
                        variant="outlined"
                        sx={{ ...sxButtonOutlined(), width: '100%' }}
                    >
                        Submit
                    </Button>
                </MouseOverPopover>
            </Box>
            <AlertDialog
                props={{
                    open,
                    transaction,
                    address,
                    sendTransaction,
                    isLoading,
                    setOpen,
                }}
            />
            <CustomizedSnackbar props={{ isError, isSuccess, err, data }} />
        </>
    );
};
