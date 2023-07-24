import { useEffect, useState } from 'react';
import { useFonts } from './hooks';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import { Home } from './pages/Home';
import { WagmiConfig } from 'wagmi';
import { wagmiConfig, ethereumClient } from './web3Modal';
import { Web3Modal } from '@web3modal/react';

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
                    themeVariables={{
                        '--w3m-accent-color': '#ab47bc',
                        '--w3m-accent-fill-color': '#fff',
                        '--w3m-background-color': '#ab47bc',
                    }}
                />
            </ThemeProvider>
        </>
    );
};
