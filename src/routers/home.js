import { Component } from "react";
import { BiUserCircle } from "react-icons/bi";
import "../components/styles/home.css";
import { AiOutlineDollarCircle } from "react-icons/ai";

export default class Home extends Component {
	render() {
		const styles = { width: "100px", height: "100px" };
		return (
			<div className="body">
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
				<div className="transactions-user">
						
				</div>
			</div>
		);
	}
}
