import { useContext } from 'react';
import { ThemeContext } from './ThemeContext.tsx';
import { LOCALSTORAGE_THEME_KEY, Themes } from './model/themeContext.types.ts';

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Themes.dark ? Themes.light : Themes.dark;
    setTheme?.(newTheme);
    localStorage.setItem(LOCALSTORAGE_THEME_KEY, newTheme);
    document.body.className = `app_${theme}_theme`;
  };

  return {
    theme,
    toggleTheme,
  };
};
