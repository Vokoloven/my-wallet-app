import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import { sxButtonOutlined } from 'theme';
import { useWeb3Modal } from '@web3modal/react';
import { useFetchData } from 'hooks';
import { handleButtonContent } from './handleButtonContent';

export const CustomAppBar = () => {
    // const { open } = useWeb3Modal();
    // const { address, data, isConnected } = useFetchData();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
                sx={{ bgcolor: 'custom.white', boxShadow: 'none' }}
            >
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <LogoDevIcon
                            sx={{
                                width: 40,
                                height: 40,
                                color: 'secondary.dark',
                            }}
                        />
                    </Box>
                    <Button
                        aria-label="Connect Wallet"
                        type="button"
                        variant="outlined"
                        sx={{ ...sxButtonOutlined(), textTransform: 'none' }}
                        onClick={() => open()}
                    >
                        {/* {handleButtonContent(
                            isConnected,
                            address,
                            Typography,
                            data
                        )} */}
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
