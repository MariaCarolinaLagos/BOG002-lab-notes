import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route, 
  Link
} from "react-router-dom";

import Login from './components/login';
import Home from './components/home';
import LogGoogle from './components/loginGoogle';
// import fire from './firebase-config.js'



function App() {
  return (
  <Router>
    <div className="container">
      <div className="btn-login">
        <Link to="/">
          LOGIN 
        </Link>
      </div>
      <div className="btn-home">
        <Link to="/Home">
          HOME 
        </Link>
      </div>
      
      <Switch>
        <Route path="/" exact>
          <Login />
          <LogGoogle />
        </Route>
        <Route path="/home">
        <Home />
        </Route>
      </Switch> 
    </div>  
  </Router>  
  );
}
  


export default App;
