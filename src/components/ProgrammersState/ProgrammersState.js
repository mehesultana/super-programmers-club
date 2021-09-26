import React, { Fragment, useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import fakeData from '../../resources/fakeData';
import './ProgrammersState.css';
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
			<div className=" shop-container">
				<Row xs={2} md={3} className="g-4 ">
					{programmers.map((pg) => {
						// console.log(pg.first_name);
						return (
							<Fragment>
								<Programmer key={programmers.id} programmer={pg} handleAddToCart={handleAddToCart}></Programmer>
							</Fragment>
						);
					})}
				</Row>
				<Cart cart={cart}></Cart>
			</div>
		</div>
	);
};

export default ProgrammersState;
