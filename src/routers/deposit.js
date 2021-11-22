import { Component } from 'react';
import axios from 'axios';
import '../components/styles/deposit.css';
import CardUserData from './card-user';


export default class Deposit extends Component {

	constructor(props) {
		super(props)

		this.state = {
			email: '',
			firts_name: '',
			last_name: '',
			money: 0,
			userFound: false,
			message: ''
		}
		this.dataUser = {
			email: '',
			firts_name: '',
			last_name: '',
			money: 0,
			userFound: false,
			message: ''
		}

	}

	changeHandler = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = (e) => {
		e.preventDefault()
		axios
			.post('http://localhost:3000/api/search-user', this.state)
			.then(response => {
				if (response.data.userFound === true) {
					const { email, last_name, firts_name, money, userFound } = response.data;
					this.dataUser = {
						email,
						firts_name,
						last_name,
						money,
						userFound,
					}
					this.setState({
						email: this.dataUser.email,
						firts_name: this.dataUser.firts_name,
						last_name: this.dataUser.last_name,
						money: this.dataUser.money,
						userFound: this.dataUser.userFound 
					});
				}else {
					
					// if user not found in database get a false in user found
					// and take message

					this.dataUser = {
						userFound: false, 
						message: response.data.message 
					};

					this.setState({
						userFound: this.dataUser.userFound,
						message: this.dataUser.message 
					});

				}
			})
			.catch(error => {
				console.log(error.message);
				window.location = "/404-error"
			});
	}

	render() {
		const { email } = this.state;
		return (
			<div className="body">
				<div className="search-navbar">
					<form onSubmit={this.submitHandler}>
						<input type="text" name="email" id="search" value={email} onChange={this.changeHandler} />
						<button id="search-user" type="submit" className="btn-search">
							search
						</button>
					</form>
				</div>
				<CardUserData
					email={this.dataUser.email}
					firts_name={this.dataUser.firts_name}
					last_name={this.dataUser.last_name}
					money={this.dataUser.money}
					message={this.dataUser.message}
					>
				</CardUserData>
			</div>
		)
	}
}

