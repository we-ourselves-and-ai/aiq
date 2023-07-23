import { ThemeContext } from './ThemeContext.tsx';
import { FC, PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { ThemeContextProviderProps } from './model/themeContext.types.ts';

export const ThemeProvider: FC<PropsWithChildren<ThemeContextProviderProps>> = ({
  children,
  initialTheme = 'light',
}) => {
  const [theme, setTheme] = useState<typeof initialTheme>(initialTheme);

  useEffect(() => {
    document.body.className = `app_${theme}_theme`;
  }, [theme]);

  const contextValue = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};
