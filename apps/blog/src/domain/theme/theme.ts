import { atom } from '@dacorm/dotai';
import { LocalStorage } from '../../shared/services/Storage.ts';
import { LOCALSTORAGE_THEME_KEY, Themes } from './model/themeContext.types.ts';

const initialTheme = LocalStorage.get(LOCALSTORAGE_THEME_KEY);

export const $theme = atom(initialTheme || Themes.dark);
