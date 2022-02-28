import { useState } from 'react';
import HomePage from './routes/Home/HomePage';
import GamePage from './routes/Game/GamePage';

const App = () => {
  const [page, setPage] = useState('app');
  const handleChangePage = (page) => {
    setPage(page);
  }

  switch (page) {
    case 'app':
      return <HomePage onChangePage={handleChangePage} />
    case 'game':
      return <GamePage onChangePage={handleChangePage} />
    default:
      return <HomePage />
  };
};

export default App;