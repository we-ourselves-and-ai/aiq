import { useAtomValue } from '@dacorm/dotai';
import { $router } from '../../../shared/router';
import { Profile } from '../../../pages/Profile';
import { Login } from '../../../pages/Login';
import { Main } from '../../../pages/Main';
import { useTheme } from '../../../domain/theme';
import { Post } from '../../../pages/Post';

export const Routes = () => {
  const page: string = useAtomValue($router);
  const {} = useTheme();

  if (page.includes('/post/')) {
    return <Post />;
  }

  switch (page) {
    case '/':
      return <Main />;
    case '/profile':
      return <Profile />;
    case '/signin':
      return <Login />;
  }
};
