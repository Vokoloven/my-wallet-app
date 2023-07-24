import { useEffect, useState } from 'react';
import { useFonts } from './hooks';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import { Home } from './pages/Home';
import { WagmiConfig } from 'wagmi';
import { wagmiConfig, ethereumClient } from './web3Modal';
import { Web3Modal } from '@web3modal/react';
import { web3ModalColors } from './theme';

export const App = () => {
    const [ready, setReady] = useState(false);
    useFonts();

    useEffect(() => {
        setReady(true);
    }, []);

    return (
        <>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                {ready ? (
                    <WagmiConfig config={wagmiConfig}>
                        <Home />
                    </WagmiConfig>
                ) : null}
                <Web3Modal
                    projectId={import.meta.env.VITE_PROJECT_ID}
                    ethereumClient={ethereumClient}
                    themeVariables={{ ...web3ModalColors }}
                />
            </ThemeProvider>
        </>
    );
};
