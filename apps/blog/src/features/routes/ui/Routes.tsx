import { useAtomValue } from '@dacorm/dotai';
import { $router } from '../../../shared/router';
import { openPage } from '@dacorm/dotai-router';
import { ThemeChanger } from '../../ThemeChanger';
import { Profile } from '../../../pages/Profile';

// TODO: Вынести каждый компонент отдельно в pages

export const Routes = () => {
  const page = useAtomValue($router);

  if (page === '/') {
    return (
      <div>
        main route
        <button onClick={() => openPage($router, 'profile', null)}></button>
        <ThemeChanger />
      </div>
    );
  } else if (page === '/profile') {
    return <Profile />;
  }
};
