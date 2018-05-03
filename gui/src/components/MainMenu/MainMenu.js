import React, { Component } from 'react';

import { Link } from "react-router-dom";
import Dropdown from '../Dropdown/Dropdown';

export default class MainMenu extends Component {

	render() {
		return (
			<div>
				<Dropdown />
			</div>
		);
	}


}