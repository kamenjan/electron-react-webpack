import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class About extends Component {

	componentWillUnmount() {
		console.log('Component About: unmount on router redirect');
	}

	render() {
		return (
			<div>
				<h2>About</h2>
			</div>
		);
	}
}