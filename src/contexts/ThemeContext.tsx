import React, { createContext, useState, useContext } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from '@mui/material/styles';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
    themeMode: ThemeMode;
    toggleThemeMode: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
    themeMode: 'dark',
    toggleThemeMode: () => { }
});

export function useThemeContext() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useThemeContext must be used within a ThemeProvider');
    }
    return context;
}

const lightTheme = createTheme({
    palette: {
        mode: 'light',
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [themeMode, setThemeMode] = useState<ThemeMode>('dark');

    const toggleThemeMode = () => {
        setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    const theme = themeMode === 'dark' ? darkTheme : lightTheme
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <ThemeContext.Provider value={{ themeMode, toggleThemeMode }}>
                {children}
            </ThemeContext.Provider>
        </MuiThemeProvider>
    );
}
