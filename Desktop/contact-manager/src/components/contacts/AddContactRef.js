import React, { Component } from "react";

class AddContact extends Component {
	constructor() {
		super(props);

		this.nameInput = React.createRef();
		this.emailInput = React.createRef();
		this.phoneInput = React.createRef();
	}

	onSubmit = e => {
		e.preventDefault();

		const contact = {
			name: this.nameInput.current.value,
			email: this.emailInput.current.value,
			phone: this.phoneInput.current.value
		};
	};

	onChange = e => this.setState({ [e.target.name]: e.target.value });

	static defaultProps = {
		name: "Fred Smith",
		email: "fred@yahoo.com",
		phone: "777-777-777"
	};

	render() {
		const { name, email, phone } = this.state;
		return (
			<div className="card mb-3">
				<div className="card-header">Add Contact</div>
				<div className="card-body">
					<form onSubmit={this.onSubmit}>
						<div className="form-group">
							<label htmlFor="name">Name</label>
							<input
								className="form-control form-control-lg"
								type="text"
								name="name"
								placeholder="Enter name..."
								defaultValue={name}
								ref={this.nameInput}
							/>
						</div>

						<div className="form-group">
							<label htmlFor="email">Email</label>
							<input
								className="form-control form-control-lg"
								type="email"
								name="email"
								placeholder="Enter Email..."
								defaultValue={email}
								ref={this.emailInput}
							/>
						</div>

						<div className="form-group">
							<label htmlFor="phone">Phone</label>
							<input
								className="form-control form-control-lg"
								type="text"
								name="phone"
								placeholder="Enter Phone number..."
								defaultValue={phone}
								ref={this.phoneInput}
							/>
						</div>
						<input
							type="submit"
							value="Add Contact"
							className="btn btn-light btn-block"
						/>
					</form>
				</div>
			</div>
		);
	}
}
export default AddContact;
