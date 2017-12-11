import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router,  Route, Link} from 'react-router-dom'
import Main from 'Main'


import 'popper.js/dist/umd/popper'
import 'bootstrap/dist/js/bootstrap'

//Css
import 'font-awesome/css/font-awesome.css'
import "bootstrap/dist/css/bootstrap.css"

//Custom Style
import "mainstyle"


var {Provider} = require('react-redux');
var actions = require('actions');
var store = require('configureStore').configure();


ReactDOM.render(
<Provider store={store}>
  <Router basename='/'>
    <main>
      <Route path='/' component={Main} />
    </main>
  </Router>
 </Provider>,
  document.getElementById('app')
);

