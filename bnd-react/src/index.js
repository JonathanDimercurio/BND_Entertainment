/*  Author: Jonathan Dimercurio     Date:
 *  Description: This arcanary is best left alone o.o;;
 *      Index.js is the foundational 'head' of the webapp.
 *      All React components are called via this underlying
 *      script.
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root')
);
