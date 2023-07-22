import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        secondary: {
            main: '#ce93d8',
            light: '#f3e5f5',
            dark: '#ab47bc',
        },
        custom: {
            white: '#fff',
            black: '#696969',
        },
    },

    breakpoints: {
        values: {
            mobile: 320,
            tablet: 768,
            laptop: 1024,
            desktop: 1440,
        },
    },
});
