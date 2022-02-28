import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import FavouritesPage from './pages/Favourites';
import MainNavigation from './components/layout/MainNavigation';


function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/favourites'>
          <FavouritesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;