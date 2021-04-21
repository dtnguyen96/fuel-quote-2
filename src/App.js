import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import axios from "axios";

import FuelQuote from "./components/FuelQuote";
import FuelQuoteHistory from "./components/fuelquotehistory.js";
import ProfileManagement from "./components/ProfileManagement.js";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import LogOutBtn from './components/LogOutBtn';

import AuthContext, { AuthContextProvider } from "./components/Context/AuthContext";

import React, { useContext } from "react";

axios.defaults.withCredentials = true;

function App() {
  const { loggedIn } = useContext(AuthContext);

  const login_handler = data => console.log(data)

  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/sign-in"}>Get-Your-Quote</Link>
            <br></br>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                {loggedIn === false && (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/sign-in"}>Login</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                    </li>
                  </>
                )}
                {loggedIn === true && (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/profile-management"}> Profile Management </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/fuel-quote"}>Fuel Quote Demo</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/fuel-quote-history"}>Fuel Quote History</Link>
                    </li>
                    <LogOutBtn />
                  </>
                )}

              </ul>
            </div>
          </div>
        </nav>


        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              {loggedIn === false && (
                <>
                  <Route exact path='/'> <Login /> </Route>
                  <Route path="/sign-in"> <Login /> </Route>
                  <Route path="/sign-up"> <Signup /> </Route>

                </>
              )}
              {loggedIn === true && (
                <>
                  <Route path="/fuel-quote"> <FuelQuote /> </Route>
                  <Route path="/profile-management"> <ProfileManagement /> </Route>
                  <Route path="/fuel-quote-history"> <FuelQuoteHistory /> </Route>
                </>
              )}
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
