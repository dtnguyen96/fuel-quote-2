import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import login from "./components/Login"
import signup from "./components/Signup"
import fuelquote from "./components/FuelQuote"
import Test from "./components/FuelQuote"

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Test></Test>
          <Link className="navbar-brand" to={"/sign-in"}>Get-Your-Quote</Link>
          <br></br>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-link">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
              <li className="nav-link">
                <Link className="nav-link" to={"/fuel-quote"}>Fuel Quote Demo</Link>
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
            <Route exact path='/'> <login />
            </Route>
            <Route path="/sign-in"><login /> </Route>
            <Route path="/sign-up"> <signup /> </Route>
            <Route path="/fuel-quote" component={fuelquote} />
          </Switch>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
