import React from 'react';
import { Router, Redirect} from 'react-router-dom'


import history from "./history.js"

import App from './App.js'

class Root extends React.Component {
  render(){
    return (
      <React.Fragment>
          <Router history={history}>
             <App/>
          </Router>
      </React.Fragment>
    );
  }
}


export default Root;
