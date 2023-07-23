export const Themes = {
  light: 'light',
  dark: 'dark',
} as const;

export interface ThemeContextProps {
  theme?: keyof typeof Themes;
  setTheme?: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

export interface ThemeContextProviderProps {
  initialTheme: keyof typeof Themes;
}

export const LOCALSTORAGE_THEME_KEY = 'theme';
