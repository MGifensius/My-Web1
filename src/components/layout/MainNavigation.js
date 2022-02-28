import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>SejutaCita's Booku</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home Page</Link>
          </li>
          <li>
            <Link to='/favourites'>My Favourites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;