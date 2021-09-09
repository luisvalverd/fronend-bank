import { Component } from "react";

export default class Register extends Component {
  render() {
    return (
      <div className="register">
        <form>
          <input type="text" className="firts_name" />
          <imput type="text" className="last_name" />
          <input type="email" className="email" name="email" />
          <input type="number" className="credit_card" />
          <input type="" className="type_credit_card" />
          <input type="password" className="password" />
          <input type="password" className="confirm_password" />

          <button type="submit">Sign up</button>
        </form>
      </div>
    );
  }
}
