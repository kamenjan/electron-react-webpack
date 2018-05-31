import React, { Component } from 'react';

import { Link } from "react-router-dom";
import "./dropdown.scss";

export default class Dropdown extends Component {

	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};
	}

	toggleDropdown = () => {
		this.setState({ open: !this.state.open })
	};

	render() {

		let dropdownContent;
		if (this.state.open) {
			dropdownContent = (
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/settings">Settings</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>
			)
		}


		return (
			<div
				onClick={this.toggleDropdown}
				className={`dropdown`}
			>
				<div>Navigate</div>
				{dropdownContent}
			</div>
		);
	}

}