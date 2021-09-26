import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHome } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
	return (
		<div className="header">
			<img className="logo" src={logo} alt="" />

			<nav>
				<FontAwesomeIcon icon={faHome} className="icon" />
				<a href="/orders">My Profile</a>
				<a href="/About">About Us</a>
			</nav>
			<h1>Create Your Own Programming Team</h1>
			<h3>Total Budget : 500 Million</h3>
		</div>
	);
};

export default Header;
