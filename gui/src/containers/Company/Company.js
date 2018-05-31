/*
* When user opens up the application he sees a white screen, because he has no company selected by default.
* From here he can either select an existing company and see the company dashboard
* Company dashboard. When user opens the application. This will be his home screen
*
*
*
* */


import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Company extends Component {

	componentWillUnmount() {
		console.log('Component Company: unmount on router redirect');
	}

	render() {
		return (
			<div>
				<h2>Company</h2>
			</div>
		);
	}
}