import './App.css';

import * as React from 'react';
import {Route} from 'react-router'

import Login from './containers/Auth/Login'
import Register from './containers/Auth/Register'
import NewsFeed from './containers/NewsFeed/index'
import Navbar from './components/Navbar'


class App extends React.Component {
  public render() {
    return (
       <div>
         <Route exact={true} path='/' component={Login} />
         <Route exact={true} path='/register' component={Register} />
         <Route path='/app' component={NavBar} />
         <Route exact={true} path='/app/newsfeed' component={NewsFeed} />
       </div>
     
    );
  }
}

export default App;
