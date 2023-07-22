import { CustomAppBar } from 'components/AppBar';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { Form } from 'components/Form';
import Box from '@mui/material/Box';

export const Home = () => {
    return (
        <Container maxWidth={'desktop'}>
            <CustomAppBar />
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Paper
                    elevation={3}
                    sx={(theme) => ({
                        mt: 10,
                        p: 4,
                        width: '100%',
                        [theme.breakpoints.down('tablet')]: {
                            maxWidth: 360,
                        },
                        [theme.breakpoints.up('tablet')]: {
                            maxWidth: 444,
                        },
                    })}
                >
                    <Form />
                </Paper>
            </Box>
        </Container>
    );
};
