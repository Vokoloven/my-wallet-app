import { useState } from 'react';
import { Input } from '../../components/Input';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { sxButtonOutlined } from '../../theme';
import { walletInputs } from '../../components/Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../validation';
import { inputConverter } from './inputConverter';
import { AlertDialog } from '../AlertDialog/AlertDialog';
import { useFetchData } from '../../hooks';
import { MouseOverPopover } from '../Popover';

export const Form = () => {
    const { address, isConnected } = useFetchData();
    const [error, setError] = useState({});
    const [open, setOpen] = useState(false);
    const [transaction, setTransaction] = useState({
        address: '',
        balance: '',
    });
    const [anchorEl, setAnchorEl] = useState(null);
    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const { register, handleSubmit, setValue } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        setTransaction(data);
        setOpen(true);
        setError({});
        // setTimeout(() => {
        //     ['balance', 'address'].map((item) => setValue(item, ''));
        // }, 0);
    };

    const onError = (errors) => setError(errors);

    const handleChange = (e) => {
        const { id, value } = e.target;
        inputConverter(id, value, setValue);
    };

    return (
        <>
            <Box
                component={'form'}
                onSubmit={handleSubmit(onSubmit, onError)}
                onChange={handleChange}
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
                        handlePopoverClose,
                        handlePopoverOpen,
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
            <AlertDialog props={{ handleClose, open, transaction, address }} />
        </>
    );
};
