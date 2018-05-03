import React, { Component } from 'react';

// These fucking routers are killing electron by fiddling with url address bar
// -TODO: Solution is to implement <MemoryRouter> - https://reacttraining.com/react-router/web/api/MemoryRouter-
import { MemoryRouter as Router, Route, Link } from "react-router-dom";


import Home from './Home';
import About from './About';
import Topics from './Topics';

export default class App extends Component {

	render() {
		return (
			<Router
				initialEntries={[ '/', '/about', { pathname: '/three' } ]}
				initialIndex={2}
			>
				<div>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
					</ul>

					<hr />

					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
				</div>
			</Router>
		);
	}


}