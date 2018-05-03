import React, { Component } from 'react';

import { Link } from "react-router-dom";

export default class Dropdown extends Component {

	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};
	}

	toggleDropdown = () => {
		console.log('click');
		this.setState({
			open: true
		})
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
			<div>
				<div onClick={this.toggleDropdown}>Navigate</div>
				{dropdownContent}
			</div>
		);
	}

}