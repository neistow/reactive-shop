import { useDispatch } from 'react-redux';
import { setTheme, Theme } from '../themeSlice';

function ThemeSwitcher() {
    const dispatch = useDispatch();

    const handleThemeChange = (newTheme: Theme) => {
        dispatch(setTheme(newTheme));
    }

    return (
        <div className="theme-switcher">
            <button onClick={() => handleThemeChange('light')}>Light Theme</button>
            <button onClick={() => handleThemeChange('dark')}>Dark Theme</button>
        </div>
    );
}

export default ThemeSwitcher;