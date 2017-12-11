var redux = require('redux');
var {listsReducer} = require('reducers');
var thunk = require('redux-thunk').default;
import logger from "redux-logger";
import promise from "redux-promise-middleware";


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
