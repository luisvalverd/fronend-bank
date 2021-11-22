import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./routers/home";
import Register from "./routers/register";
import Login from "./routers/login";
import { Component } from "react";
import Deposit from "./routers/deposit";
import Error404 from "./routers/404Error";

export default class App extends Component{
	
	render() {
		return (
			<div className="App">
				<Router>
					<div className="navbar">
						<a href="/" className="title-navbar">
							bank app
						</a>
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
						<Route path="/404-error">
							<Error404 />
						</Route>
						<Route path="/deposit">
							<Deposit />
						</Route>
						<Route path="/register">
							<Register />
						</Route>
						<Route path="/login">
							<Login />
						</Route>
						<Route path="/">
							<Home
								name="luis"
								lastname="valverde"
								gender="masculine"
								money="1000"
								cardCredit="123456792384"
								typeCardCredit="visa"
							/>
						</Route>
					</Switch>
				</Router>
			</div>
		);
	}
}

