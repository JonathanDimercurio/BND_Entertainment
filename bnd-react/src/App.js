/*  Author: Jonathan Dimercurio     Date:
 *  
*/

import { Route, Switch } from 'react-router-dom';
import AddMapPage from './layout/pages/AddMap';
import AllMapsPage from './layout/pages/AllMaps';
import HomePage from './layout/pages/Home';
import MainNavigation from './layout/MainNavigation';

function App() {
    // localhost:3000/'path' - during deployment
    //

  return (
    <div>
    <MainNavigation />
    <Switch>
        <Route path='/' exact>
            <HomePage />
        </Route>

        <Route path='/AllMaps'>
          <AllMapsPage />
        </Route>

        <Route path='/AddMapPage'>
            <AddMapPage />
        </Route>
    </Switch>
    </div>
  );
}

export default App;
