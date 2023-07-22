import { Input } from '../../components/Input';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { sxButtonOutlined } from '../../theme';
import { walletInputs } from '../../components/Input';

export const Form = () => {
    return (
        <Box
            component={'form'}
            sx={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {walletInputs.map((input) => (
                <Input key={input.id} input={input} />
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
