// const Topics = ({ match }) => (
// 	<div>
// 		<h2>Topics</h2>
// 		<ul>
// 			<li>
// 				<Link to={`${match.url}/rendering`}>Rendering with React</Link>
// 			</li>
// 			<li>
// 				<Link to={`${match.url}/components`}>Components</Link>
// 			</li>
// 			<li>
// 				<Link to={`${match.url}/props-v-state`}>Props v. State</Link>
// 			</li>
// 		</ul>
//
// 		<Route path={`${match.url}/:topicId`} component={Topic} />
// 		<Route
// 			exact
// 			path={match.url}
// 			render={() => <h3>Please select a topic.</h3>}
// 		/>
// 	</div>
// );


import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from "react-router-dom";

import Topic from './Topic';

export default class Topics extends Component {

	constructor(props) {
		super(props);
		console.log(props);
	}

	componentWillUnmount() {
		console.log('Component Topics: unmount on router redirect');
	}

	render() {
		return (
			<div>
				<h2>Topics</h2>
				<ul>
					<li>
						<Link to={`${match.url}/rendering`}>Rendering with React</Link>
					</li>
					<li>
						<Link to={`${match.url}/components`}>Components</Link>
					</li>
					<li>
						<Link to={`${match.url}/props-v-state`}>Props v. State</Link>
					</li>
				</ul>

				<Route path={`${match.url}/:topicId`} component={Topic} />
				<Route
					exact
					path={match.url}
					render={() => <h3>Please select a topic.</h3>}
				/>
			</div>
		);
	}
}