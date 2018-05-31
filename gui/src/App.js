/*
* When user opens up the application he sees a white screen because no company is selected by default.
* From here he can either:
* 	[1] select an existing company and see the company dashboard (/company)
* 	[2] add new company (/company/new)
* 	[3] view global settings (/globalSettings)
* */

import React, { Component } from 'react';

import { MemoryRouter as Router, Route, Link } from "react-router-dom";

import Home from 'containers/Home/Home';
import Settings from 'containers/Settings/Settings';
import About from 'containers/About/About';
import MainMenu from 'components/MainMenu/MainMenu';

export default class App extends Component {

	render() {
		return (
			<Router
				initialEntries={[ '/', '/settings', '/about' ]}
				initialIndex={0}
			>
				<div>
					<MainMenu />
					<Route exact path="/" component={Home} />
					<Route path="/settings" component={Settings} />
					<Route path="/about" component={About} />
				</div>
			</Router>
		);
	}
}