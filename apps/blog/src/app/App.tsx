import './styles/App.css';
import { Routes } from '../features/routes';
import { ThemeProvider } from './providers/themeContext';
import {
  LOCALSTORAGE_THEME_KEY,
  Themes,
} from './providers/themeContext/model/themeContext.types.ts';

// 1 app
// 2 pages
// 3 widgets
// 4 features / no cross imports
// 5 shared // classNames
// нижестоящие слои не могут импортировать вышестоящие

function App() {
  const themeFromStorage = localStorage.getItem(LOCALSTORAGE_THEME_KEY);

  return (
    <ThemeProvider
      initialTheme={(themeFromStorage || Themes.dark) as keyof typeof Themes}
    >
      <Routes />
    </ThemeProvider>
  );
}

export default App;
