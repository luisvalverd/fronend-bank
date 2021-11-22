import { Component } from "react";
import { BiUserCircle } from "react-icons/bi";
import ModalDeposit from "./modal-deposit";

export default class CardUserData extends Component {

    render() {
        const styles = { width: "200px", height: "200px" };

        if (this.props.firts_name === '' || this.props.last_name === '' || this.props.email === '') {
            if (this.props.message === '') {
                return (
                    <h1 className="text-find-user">Find user by Email</h1>
                );
            }
        } else if (this.props.firts_name !== '' || this.props.last_name !== '' || this.props.email !== '') {
            if (this.props.message !== '' && this.props.message !== undefined) {
                console.log(this.props.message)
                return (
                    <div className="user-not-found">
                        <h2>User not found</h2>
                        <h1 className="text-find-user">Find user by Email</h1>
                    </div>
                )
            } else {
                return (
                    <div className="card-data-user-deposit">
                        <BiUserCircle style={styles} />
                        <section className="data-user-deposit">
                            <label className="data-user">Email: {this.props.email}</label>
                            <label className="data-user">Name: {this.props.firts_name}</label>
                            <label className="data-user">Lastname: {this.props.last_name}</label>
                            <label className="data-user">Money: {this.props.money}</label>
                            <ModalDeposit
                                name={this.props.firts_name}
                                lastname={this.props.last_name}
                                email={this.props.email}
                            ></ModalDeposit>
                        </section>
                    </div>
                );
            }
        }
    }
}


