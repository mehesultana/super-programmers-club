import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';

const Header = () => {
	return (
		<div className="header">
			<img className="logo" src={logo} alt="" />
			<nav>
				<a href="/shop">Menu</a>
				<a href="/orders">Order Review</a>
				<a href="/inventory">Favourite Meals</a>
			</nav>
			<h1>Create Your Own Programming Team</h1>
			<h3>Total Budget : 500 Million</h3>
		</div>
	);
};

export default Header;
