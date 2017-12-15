/****
Requiring Redux ,
Redux Thunk for  Api Calls as Middleware for Redux
Reduc Logger is log in browser console for developer purpose
****/
var redux = require('redux');
var {listsReducer} = require('reducers');
var thunk = require('redux-thunk').default;
import logger from "redux-logger";
import promise from "redux-promise-middleware";

/***Here we are creating one store for our application by combining all reducer**/
export var configure = (initialState) => {
  var reducer = redux.combineReducers({
    listsReducer: listsReducer
  });

  var store = redux.createStore(reducer,initialState, redux.compose(
  	redux.applyMiddleware(promise(),thunk,logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
}
