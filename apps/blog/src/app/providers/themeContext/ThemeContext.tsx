import { createContext } from 'react';
import { ThemeContextProps } from './model/themeContext.types.ts';

export const ThemeContext = createContext<ThemeContextProps>({});
