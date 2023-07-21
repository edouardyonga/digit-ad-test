import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#e37020',
        },
        secondary: {
            main: '#e45121',
        },
        background: {
            paper: '#fff',
            default: '#f5f5f5',
        },
        text: {
            primary: 'rgba(0, 0, 0, 0.87)',
            secondary: 'rgba(0, 0, 0, 0.54)',
        },
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#e37020',
        },
        secondary: {
            main: '#e45121',
        },
        background: {
            paper: '#4d4d4d',
            default: '#000',
        },
        text: {
            primary: '#fff',
            secondary: 'rgba(255, 255, 255, 0.7)',
        },
    },
});

export { lightTheme, darkTheme };
