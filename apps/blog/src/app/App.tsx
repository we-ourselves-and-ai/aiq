import './styles/App.css';
import { $router } from '../shared/router';
import { useAtomValue } from '@dacorm/dotai';
import { Profile } from '../features/counter';
import { openPage } from '@dacorm/dotai-router';

function App() {
  const page = useAtomValue($router);

  if (page === '/') {
    return (
      <div>
        main route
        <button onClick={() => openPage($router, 'profile', null)}></button>
      </div>
    );
  } else if (page === '/profile') {
    return <Profile />;
  }
}

export default App;
