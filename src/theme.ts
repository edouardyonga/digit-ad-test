import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        customType: 'light' | 'dark';
    }
    interface PaletteOptions {
        customType?: 'light' | 'dark';
    }
}

const theme = createTheme({
    palette: {
        customType: 'light', // You can set the initial theme type here (light or dark)
        primary: {
            main: '#2196f3',
        },
        secondary: {
            main: '#f50057',
        },
    },
});

export default theme;
