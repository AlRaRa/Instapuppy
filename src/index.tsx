import './index.css';


import createHistory from 'history/createBrowserHistory'

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router} from 'react-router'
import {Provider} from 'react-redux'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import * as reducers from './ducks'
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(combineReducers({
  ...reducers,
}),applyMiddleware(thunk))

const history = createHistory()


ReactDOM.render(

  <Provider store={store}>
  <Router history={history}>
     <App />
  </Router>
  </Provider>
 ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
