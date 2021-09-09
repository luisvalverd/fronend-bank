import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./routers/home";
import Register from "./routers/register";
import Login from "./routers/login";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <a href="/" className="title-navbar">
            bank app
          </a>
          <div className="search-navbar">
            <form>
              <input type="text" id="search" />
              <button type="button" className="btn-search">
                search
              </button>
            </form>
          </div>
          <nav className="items-navbar">
            <ul>
              <li className="item-link">
                <Link to="/" className="link-home">
                  Home
                </Link>
              </li>
              <li className="item-link">
                <Link to="/register" className="link-register">
                  Register
                </Link>
              </li>
              <li className="item-link">
                <Link to="/login" className="link-login">
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
