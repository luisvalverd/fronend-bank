import { Component, useState } from "react";
import '../components/styles/login.css';
import axios from "axios";

export default class Login extends Component {
	
	constructor(props) {
		super(props)

		const [token, setToken] = useState();
		this.token = token;
		this.set

		this.state = {
			email: '',
			password: '',
		}
	}

	changeHandler = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	submitHandler = async (e) => {
		e.preventDefault()
		await axios
			.post('http://localhost:3000/api/login', {email: this.state.email, password: this.state.password})
			.then(res => {
				window.localStorage.setItem('token', JSON.stringify(res.data.token));
				if (res.data.autorizate === true) {

				}
			})
			.catch(error => {
				console.log(error.message);
				window.location = "/login"
			})
		}

  	render() {
		const {email, password} = this.state;
    	return (
			<div className="body">
				<div className="card-login">
					<label className="card-title">login</label>	
					<form onSubmit={this.submitHandler}>
						<input className="email-login" type="email" name="email" value={email} onChange={this.changeHandler} placeholder="Email" />							
						<input className="password-login" type="password" name="password" value={password} onChange={this.changeHandler} placeholder="password" />
						<button type="submit" className="sign-in">sign in</button>
					</form>
				</div>
			</div>
    	);
  	}
}
