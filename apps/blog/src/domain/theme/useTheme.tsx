import { LOCALSTORAGE_THEME_KEY, Themes } from './model/themeContext.types.ts';
import { useAtom } from '@dacorm/dotai';
import { $theme } from './theme.ts';
import { LocalStorage } from '../../shared/services/Storage.ts';
import { useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useAtom($theme);

  useEffect(() => {
    document.body.className = `app_${theme}_theme`;
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === Themes.dark ? Themes.light : Themes.dark;
    setTheme(newTheme);
    LocalStorage.set(LOCALSTORAGE_THEME_KEY, newTheme);
    document.body.className = `app_${theme}_theme`;
  };

  return {
    theme,
    toggleTheme,
  };
};
