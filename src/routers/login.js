import { Component } from "react";
import '../components/styles/login.css';

export default class Login extends Component {
  render() {
    return (
			<div className="body">
				<div className="card-login">
					<label className="card-title">login</label>	
					<form>
						<input className="email-login" type="email" placeholder="Email" />
						<input className="password-login" type="password" placeholder="password" />
						<button type="submit" className="sign-in">sign in</button>
					</form>
				</div>
			</div>
    );
  }
}
