import React, { Component } from 'react';

export default class Home extends Component {

	componentWillUnmount() {
		console.log('Component Home: unmount on router redirect');
	}

	render() {
		return (
			<div>
				<h2>Home</h2>
			</div>
		);
	}
}