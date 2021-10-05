/*  Author: Date:
 *  Description:
*/
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
    return (
    <header className={classes.header}> 
        <div className={classes.logo}>BND_Entertainment</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/AddMapPage'>Add a New Map</Link>
                </li>
                <li>
                    <Link to='/AllMaps'>Map Archive</Link>
                </li>
            </ul>
        </nav>
    </header>
    );
}   export default MainNavigation;
