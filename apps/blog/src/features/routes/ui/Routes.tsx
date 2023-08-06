import { useAtomValue } from '@dacorm/dotai';
import { $router } from '../../../shared/router';
import { Profile } from '../../../pages/Profile';
import { Login } from '../../../pages/Login';
import { Main } from '../../../pages/Main';

export const Routes = () => {
  const page = useAtomValue($router);

  switch (page) {
    case '/':
      return <Main />;
    case '/profile':
      return <Profile />;
    case '/signin':
      return <Login />;
  }
};
