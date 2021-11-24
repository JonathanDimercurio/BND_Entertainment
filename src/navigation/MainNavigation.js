import "MainNavigation.module.css";
import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>BND_Entertainment</div>
      <nav>
        <CloseButton onclick={showNavHandler} />
        <ul>
          <Link to="/">
            <NavIcons />
          </Link>

          <li classList="navAnimation">
            <Link to="/AddMapPage">Add a New Map</Link>
          </li>
          <li classList="navAnimation">
            <Link to="/AllMaps">Map Archive</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
