import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Login extends Component {

	componentWillUnmount() {
		console.log('Component Login: unmount on router redirect');
	}

	render() {
		return (
			<div>
				<h2>About</h2>
			</div>
		);
	}
}