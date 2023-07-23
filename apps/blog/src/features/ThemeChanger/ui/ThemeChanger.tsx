import { useTheme } from '../../../domain/theme';

export const ThemeChanger = () => {
  const { toggleTheme } = useTheme();

  return <button onClick={toggleTheme}>change theme</button>;
};
