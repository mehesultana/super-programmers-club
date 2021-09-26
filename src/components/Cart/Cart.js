import React from 'react';

const Cart = (props) => {
	// console.log(props.cart);
	const { cart } = props;
	let total = 0;
	let added = [];
	for (const programmer of cart) {
		total = total + programmer.demand;
		added = added + programmer.name;
	}

	return (
		<div>
			<h1>Total Add: {props.cart.length}</h1>
			<h3>total: ${total}</h3>
			<h2>Added programmers: {added}</h2>
		</div>
	);
};

export default Cart;
