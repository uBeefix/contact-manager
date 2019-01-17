import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";
import { Link } from "react-router-dom";

class Contact extends Component {
	state = {
		showContactInfo: false
	};

	onShowClick = () => {
		this.setState({
			showContactInfo: !this.state.showContactInfo
		});
	};

	onDeleteClick = async (id, dispatch) => {
		try {
			await axios.delete(
				`https://jsonplaceholder.typicode.com/users/${id}`
			);

			dispatch({ type: "DELETE_CONTACT", payload: id });
		} catch (exception) {
			dispatch({ type: "DELETE_CONTACT", payload: id });
		}
	};

	render() {
		const { id, name, email, phone } = this.props.contact;
		const { showContactInfo } = this.state;

		return (
			<Consumer>
				{value => {
					const { dispatch } = value;
					return (
						<div className="card card-body mb-3">
							<h4>
								{name}
								<i
									style={{ cursor: "pointer" }}
									onClick={this.onShowClick}
									className="fas fa-sort-down"
								/>
								<i
									onClick={this.onDeleteClick.bind(
										this,
										id,
										dispatch
									)}
									className="fas fa-times"
									style={{
										cursor: "pointer",
										float: "right",
										color: "red"
									}}
								/>

								<Link to={`contact/edit/${id}`}>
									<i
										className="fas fa-pencil-alt mr-1"
										style={{
											cursor: "pointer",
											float: "right",
											color: "black"
										}}
									/>
								</Link>
							</h4>
							{showContactInfo && (
								<ul className="list-group">
									<li className="list-group-item">
										Email: {email}
									</li>
									<li className="list-group-item">
										Phone: {phone}
									</li>
								</ul>
							)}
						</div>
					);
				}}
			</Consumer>
		);
	}
}

Contact.defaultProps = {
	name: "Here must be a name",
	email: "Here must be an email",
	phone: "Here must be phone number"
};

Contact.propTypes = {
	contact: PropTypes.object.isRequired
};

export default Contact;
