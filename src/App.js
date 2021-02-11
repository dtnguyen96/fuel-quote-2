import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import login from "./components/login"
import signup from "./components/signup"

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>positronX.io</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-link">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/'> <login />
            </Route>
            <Route path="/sign-in"> <login /> </Route>
            <Route path="/sign-up"> <signup /> </Route>
          </Switch>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
