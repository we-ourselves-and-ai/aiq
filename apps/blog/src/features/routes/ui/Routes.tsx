import { useAtomValue } from '@dacorm/dotai';
import { $router } from '../../../shared/router';
import { openPage } from '@dacorm/dotai-router';
import { ThemeChanger } from '../../ThemeChanger';
import { Profile } from '../../../pages/Profile';
import { Button } from '@aiq/uikit';
import { Login } from '../../../pages/Login';

// TODO: Вынести каждый компонент отдельно в pages

export const Routes = () => {
  const page = useAtomValue($router);

  switch (page) {
    case '/':
      return (
        <div>
          main route
          <Button onClick={() => openPage($router, 'profile', null)} variant="medium">
            go to profile
          </Button>
          <Button onClick={() => openPage($router, 'login', null)} variant="medium">
            go to login
          </Button>
          <ThemeChanger />
        </div>
      );
    case '/profile':
      return <Profile />;
    case '/signin':
      return <Login />;
  }
};
