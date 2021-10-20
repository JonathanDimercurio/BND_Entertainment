/*  Author: Jonathan Dimercurio     Creation Date:
 *  Description: App.js handles the internal routing
 *      of the web application. It is designed to contain
 *      nothing else.
*/

import { Route, Switch } from 'react-router-dom';
import AddMapPage from './layout/pages/AddMap';
import AllMapsPage from './layout/pages/AllMaps';
import HomePage from './layout/pages/Home';
import Layout from './layout/Layout.js';

function App() {
  return (
    <Layout>  
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
    </Layout>
  );
}

export default App;
