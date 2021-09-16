import { Component } from "react";
import "../components/styles/register.css";

export default class Register extends Component {
  render() {
    return (
      <div className="body">
        <div className="register-card">
					<div className="card-title">
						<label className="title">register</label> 
					</div>
          <form>
						<div className="names-register">
							<input type="text" className="firts_name" placeholder="Name"/>
							<input type="text" className="last_name" placeholder="Last Name"/>
            </div>
            <input type="email" className="email" name="email" placeholder="Email"/>
            <input type="text" className="credit_card" placeholder="Credit Card"/>
            <input type="" className="type_credit_card" placeholder="Type Card"/>
            <input type="password" className="password" placeholder="Password"/>
            <input type="password" className="confirm_password" placeholder="Confirm Password"/>
            <button type="submit" className="sign-up">
              Sign up
            </button>
          </form>
        </div>
      </div>
    );
  }
}
