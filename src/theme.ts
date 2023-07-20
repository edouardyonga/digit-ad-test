import { createTheme } from '@mui/material';

const Theme = (mode: any) => {
    return createTheme({
        palette: {
            mode
        },
    });
};

export default Theme;
