import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router,  Route, Link} from 'react-router-dom'

//Main Component  importing
import Main from 'Main'
import Login from 'Login'

//Node Module Js Importing 
import 'popper.js/dist/umd/popper'
import 'bootstrap/dist/js/bootstrap'

//Node Module Css Importing
//import 'font-awesome/css/font-awesome.css'
import "bootstrap/dist/css/bootstrap.css"

//Custom Style Importing
//import "mainstyle"


// Importing Provider Component
var {Provider} = require('react-redux');

// Requiring  Acctions for Listing functionality 
var actions = require('actions');

// Importing Storeconfig for all component 
var store = require('configureStore').configure();


/*ReactDOM.render(
<Provider store={store}>
  	<Main apiUrl="http://192.168.0.106:1003/api/task/lists"></Main>
 </Provider>,
  document.getElementById('Listings')
);

ReactDOM.render(
<Provider store={store}>
  <Main apiUrl="http://192.168.0.106:1003/api/task/lists"></Main>
</Provider>,
document.getElementById('Listings1')
);*/


ReactDOM.render(
<Provider store={store}>
  <Router basename='/'>
    <main>
      <Route path='/' component={Main} />
      <Route exact  path='/' component={Login} />
    </main>
  </Router>
 </Provider>,
  document.getElementById('app')
);


