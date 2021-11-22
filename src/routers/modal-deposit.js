import { Component } from "react"
import ReactModal from "react-modal";
import '../components/styles/modal-deposit.css';

ReactModal.setAppElement('#root');

export default class ModalDeposit extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showModal: false
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    render() {

        return (
            <div className="modal-content">
                <button className="modal-btn-open" onClick={this.handleOpenModal}>make deposit</button>
                <ReactModal
                    isOpen={this.state.showModal}
                    onRequestClose={this.handleOpenModal}
                    contentLabel="Deposit"
                    className="modal"
                >
                    <div className="body-modal"> 
                        <h2 className="title-modal">deposit user</h2>
                        <form>
                            <input type="number" placeholder="count" />
                            <div className="data-deposit-modal">
                                <label className="data-user">Name: {this.props.name}</label>
                                <label className="data-user">Lastname: {this.props.lastname}</label>
                                <label className="data-user">Email: {this.props.email}</label>
                            </div>
                            <div className="group-btns">
                                <button className="close-button" onClick={this.handleCloseModal}>close</button>
                                <button className="deposit-button">deposit</button>
                            </div>
                        </form>
                    </div>
                </ReactModal>
            </div>
        );
    }
}