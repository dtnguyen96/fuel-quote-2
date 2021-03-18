import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from "axios";
import FuelQuote from "./components/FuelQuote"
import FuelQuoteHistory from "./components/fuelquotehistory.js"
import ProfileManagement from "./components/ProfileManagement.js"
import Login from "./components/Login.js"
import Signup from "./components/Signup.js"
axios.defaults.withCredentials = true;

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Get-Your-Quote</Link>
          <br></br>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/profile-management"}> Profile Management </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/fuel-quote"}>Fuel Quote Demo</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/fuel-quote-history"}>Fuel Quote History</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route path="/fuel-quote"> <FuelQuote /> </Route>
            <Route exact path='/'> <Login /> </Route>
            <Route path="/sign-in"> <Login /> </Route>
            <Route path="/sign-up"> <Signup /> </Route>
            <Route path="/profile-management"> <ProfileManagement /> </Route>
            <Route path="/fuel-quote-history"> <FuelQuoteHistory /> </Route>
          </Switch>
        </div>
      </div>
    </div>
  </Router>
  );
}

export default App;
