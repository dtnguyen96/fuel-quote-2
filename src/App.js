import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import FuelQuote from "./components/FuelQuote"
import FuelQuoteHistory from "./components/FuelQuoteHistory.js"

import ProfileManagement from "./components/ProfileManagement.js"

import Login from "./components/Login.js"
import Signup from "./components/Signup.js"


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
              <li className = "nav-item">
                <Link className = "nav-link" to={"/profile-management"}> Profile Management </Link>
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

{/* 
- Fuel Quote Form with following fields: (We are not building pricing module yet)
	- Gallons Requested (numeric, required)
	- Delivery Address (Non-editable, comes from client profile)
	- Delivery Date (Calender, date picker)
	- Suggested Price / gallon (numeric non-editable, price will be calculated by Pricing Module - we are not building pricing module yet)
	- Total Amount Due (numeric non-editable, calculated (gallons * price))
*/}

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route path="/fuel-quote"> <FuelQuote /> </Route>
            <Route exact path='/'> <Login /> </Route>
            <Route path="/sign-in"> <Login /> </Route>
            <Route path="/sign-up"> <Signup /> </Route>
            <Route path = "/profile-management"> <ProfileManagement /> </Route>
            <Route path="/fuel-quote-history"> <FuelQuoteHistory /> </Route>
          </Switch>
        </div>
      </div>
    </div>
  </Router>
  );
}

export default App;
