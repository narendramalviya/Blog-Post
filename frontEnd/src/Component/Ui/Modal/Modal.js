import React, { Component } from "react";
import "./Modal.css";
class Modal extends Component {
	state = {
		data: null,
		showModal: true,
	};

	onCloseModal = () => {
		this.setState({
			showModal: false,
		});
	};
	render() {
		console.log("modal show", this.state.showModal, this.props);
		return (
			<div>
				<div
					className={`modal-main show-modal`	}
					// className={`modal-main ${this.state.showModal ? 'show-modal' : ''}`	}
					onClick={this.onCloseModal}
				>
					<div className="modal-content-area">
						<span
							className="close-button"
							onClick={this.onCloseModal}
						>
							×
						</span>
						<h1>Hello, I am a modal!</h1>
					</div>
				</div>
			</div>
		);
	}
}
export default Modal;
