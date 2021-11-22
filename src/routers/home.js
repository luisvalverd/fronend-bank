import { Component } from "react";
import { BiUserCircle } from "react-icons/bi";
import "../components/styles/home.css";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';

export default class Home extends Component {
	render() {
		const styles = { width: "100px", height: "100px" };
		return (
			<div className="body">
				<div className="position-deposits">
					<Link to="/deposit" className="link-deposits">
						to deposit
					</Link>
				</div>
				<section className="data-cards">
					<div className="card-data-user">
						<BiUserCircle style={styles} />
						<div className="datas-user">
							<ul className="content-data">
								<li className="data">
									<label className="name-user">name:  {this.props.name} </label>
								</li>
								<li className="data">
									<label className="lastname-user">lastname: {this.props.lastname} </label>
								</li>
								<li className="data">
									<label className="gender-user">gender: {this.props.gender} </label>
								</li>
							</ul>
						</div>
					</div>
					<div className="card-user-bank">
						<AiOutlineDollarCircle style={styles} />
						<div className="datas-bank-user">
							<ul className="content-data">
								<li>
									<label>money: $ {this.props.money} </label>
								</li>
								<li>
									<label>card credit: {this.props.cardCredit} </label>
								</li>
								<li>
									<label>type: {this.props.typeCardCredit} </label>
								</li>
							</ul>
						</div>
					</div>
				</section>
				<div className="transactions-user">
					<table>
						<thead>
							<tr>
								<th>ID</th>
								<th>Name</th>
								<th>Lastname</th>
								<th>Email</th>
								<th>Money</th>
							</tr>
						</thead>
						<tbody id="test">

						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

