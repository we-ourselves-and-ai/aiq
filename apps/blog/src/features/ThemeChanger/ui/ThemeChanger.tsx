import { useTheme } from '../../../app/providers/themeContext';

export const ThemeChanger = () => {
  const { toggleTheme } = useTheme();

  return <button onClick={toggleTheme}>change theme</button>;
};
