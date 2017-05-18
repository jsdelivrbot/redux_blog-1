import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//brownserHistory: when URL updates, browserHistory updates everything after the protocol (http)
import { Router, browserHistory } from 'react-router';
import reducers from './reducers';
import routes from './routes'

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  	<Router history={browserHistory} routes={routes}/> 
  </Provider>
  , document.querySelector('.container'));
