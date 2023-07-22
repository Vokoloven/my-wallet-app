import { Input } from 'components/Input';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { sxButtonOutlined } from 'theme';
import { walletInputs } from 'components/Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from 'validation';

export const Form = () => {
    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (e) => {
        console.log(e);
    };
    const onError = (e) => {
        console.log(e);
    };

    return (
        <Box
            component={'form'}
            sx={{
                display: 'flex',
                flexDirection: 'column',
            }}
            onSubmit={handleSubmit(onSubmit, onError)}
        >
            {walletInputs.map((input) => (
                <Input key={input.id} input={input} register={register} />
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
