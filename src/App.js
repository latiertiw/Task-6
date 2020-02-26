import React from 'react';
import './style.css';
import routes from "./routes/index.js"
import {Switch,BrowserRouter,Route, Router, Redirect} from 'react-router-dom'
import history from "./history"

function App() {

  const toPage = (url) => {
    history.push(url)
  }

  return (
    <div className="App">

        <div className="header">
            <button onClick={()=>{toPage('/actors')}} className="navbutton">
              <h1>Actors</h1>
            </button>
            <button onClick={()=>{toPage('/')}} className="navbutton">
              <h1>Main</h1>
            </button>
        </div>

        <Switch>
          { routes.map((route) => <Route key={route.path} path={route.path} 
                                    component={route.component} 
                                    exact={route.exact} />)
          }
          <Redirect to="/"/>
        </Switch>
    </div>
  );
}

export default App;
