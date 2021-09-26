import React from 'react';
import './Cart.css';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
	// console.log(props.cart);
	const totalProgrammer = props.cart;

	const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;

	let total = 0;
	for (const programmer of totalProgrammer) {
		const { demand } = programmer;
		total = total + demand;
	}

	return (
		<section>
			<h2>My Cart {cartIcon}</h2>
			<hr />
			<h4>Add Programmers: {totalProgrammer.length}</h4>

			{totalProgrammer.map((p) => {
				const { name, demand, id } = p;
				return (
					<section key={id}>
						<Table striped bordered hover>
							<thead>
								<tr>
									<th>Hired Programmers </th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										{name} ${demand} million
									</td>
								</tr>
							</tbody>
						</Table>
					</section>
				);
			})}
			<h4>Total Amount: ${total} million</h4>
		</section>
	);
};

export default Cart;
