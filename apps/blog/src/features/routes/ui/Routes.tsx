import { useAtomValue } from '@dacorm/dotai';
import { $router } from '../../../shared/router';
import { ThemeChanger } from '../../ThemeChanger';
import { Profile } from '../../../pages/Profile';
import { Login } from '../../../pages/Login';
import { Link } from '../../../shared/link/ui/Link.tsx';

// TODO: Вынести каждый компонент отдельно в pages

export const Routes = () => {
  const page = useAtomValue($router);

  switch (page) {
    case '/':
      return (
        <div>
          main route
          <Link to={'profile'}>go to profile</Link>
          <Link to={'login'}>go to login</Link>
          <ThemeChanger />
        </div>
      );
    case '/profile':
      return <Profile />;
    case '/signin':
      return <Login />;
  }
};
