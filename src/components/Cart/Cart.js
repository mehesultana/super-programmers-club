import React from 'react';
import './Cart.css';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Button from '@restart/ui/esm/Button';

const Cart = (props) => {
	// console.log(props.cart);
	const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
	const { cart } = props;
	let total = 0;
	let added = [];
	let id = 0;
	for (const programmer of cart) {
		total = total + programmer.demand;
		added = added + programmer.name;
		id = id + programmer.id;
	}

	return (
		<div>
			<h2>My Cart {cartIcon}</h2>
			<hr />
			<h4>Total Add: {props.cart.length}</h4>
			<h4>Total Amount: ${total} million</h4>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Hired Programmers Name</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{added} </td>
					</tr>
				</tbody>
			</Table>
			<Button className="hire" variant="outline-secondary" size="sm">
				Hire
			</Button>
		</div>
	);
};

export default Cart;
