import React, { Component } from 'react';

import { MemoryRouter as Router, Route, Link } from "react-router-dom";

import Home from './containers/Home/Home';
import Settings from './containers/Settings/Settings';
import About from './containers/About/About';

export default class App extends Component {

	render() {
		return (
			<Router
				initialEntries={[ '/', '/settings', '/about' ]}
				initialIndex={0}
			>
				<div>

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

					<hr />

					<Route exact path="/" component={Home} />
					<Route path="/settings" component={Settings} />
					<Route path="/about" component={About} />
				</div>
			</Router>
		);
	}


}