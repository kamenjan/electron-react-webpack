import React, { Component } from 'react';

export default class Settings extends Component {

	componentWillUnmount() {
		console.log('Component Settings: unmount on router redirect');
	}

	render() {
		return (
			<div>
				<h2>Settings</h2>
			</div>
		);
	}
}