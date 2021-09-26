import React, { Fragment, useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import fakeData from '../../resources/fakeData';
import Programmer from '../Programmer/Programmer';
import Cart from '../Cart/Cart';

const ProgrammersState = () => {
	const [programmers, setProgrammers] = useState([]);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		setProgrammers(fakeData);
		// console.log(programmers);
	}, [programmers]);

	const handleAddToCart = (programmer) => {
		const newCart = [...cart, programmer];
		setCart(newCart);
	};

	return (
		<div>
			<h1>Create your own team</h1>
			<Row xs={1} md={3} className="g-4">
				<Col>
					<Cart cart={cart}></Cart>
				</Col>
				{programmers.map((pg) => {
					// console.log(pg.first_name);
					return (
						<Fragment>
							<Programmer key={programmers.id} programmer={pg} handleAddToCart={handleAddToCart}></Programmer>
						</Fragment>
					);
				})}
			</Row>
		</div>
	);
};

export default ProgrammersState;
