import './styles/App.css';
import { Routes } from '../features/routes';

// 1 app
// 2 pages
// 3 widgets
// 4 features / no cross imports
// 5 shared // classNames
// нижестоящие слои не могут импортировать вышестоящие

function App() {
  return <Routes />;
}

export default App;
