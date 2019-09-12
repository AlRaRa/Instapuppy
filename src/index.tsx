import './index.css';


import createHistory from 'history/createBrowserHistory'

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router} from 'react-router'
import {Provider} from 'react-redux'
import {createStore, combineReducers} from 'redux'
import * as reducers from './ducks'
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(combineReducers({
  ...reducers,
}))

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
