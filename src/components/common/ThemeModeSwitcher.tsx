

import { useThemeContext } from '../../contexts/ThemeContext';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';

const ThemeModeSwitcher = () => {

    const { themeMode, toggleThemeMode } = useThemeContext();

    return (
        <div>
            <IconButton sx={{ m: 2, float: 'right' }} onClick={toggleThemeMode} color="inherit">
                {themeMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
        </div>
    )
}

export default ThemeModeSwitcher