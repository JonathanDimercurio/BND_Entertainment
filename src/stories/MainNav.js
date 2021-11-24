import { useContext } from 'react';
import { Link } from 'react-router-dom';

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Maps</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Profile</Link>
          </li>
          <li>
            <Link to='/new-Map'>Add New Map</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
