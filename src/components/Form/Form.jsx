import { useState } from 'react';
import { Input } from '../../components/Input';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { sxButtonOutlined } from '../../theme';
import { walletInputs } from '../../components/Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../validation';
import { inputConverter } from './inputConvertere';

export const Form = () => {
    const [error, setError] = useState({});
    const { register, handleSubmit, setValue } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        setError({});
        ['balance', 'address'].map((item) => setValue(item, ''));

        console.log(data);
    };
    const onError = (errors) => setError(errors);

    const handleChange = (e) => {
        const { id, value } = e.target;
        inputConverter(id, value, setValue);
    };

    return (
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
            <Button
                aria-label="Submit Data"
                type="submit"
                variant="outlined"
                sx={{ ...sxButtonOutlined() }}
            >
                Submit
            </Button>
        </Box>
    );
};
