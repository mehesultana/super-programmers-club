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
		//console.log(programmers);
	}, [programmers]);

	const handleAddToCart = (programmer) => {
		const newCart = [...cart, programmer];
		setCart(newCart);
	};

	return (
		<>
			<div className="body-header">
				<h1>Create Your Own Programming Team</h1>
				<h3>Total Budget : $500 Billion</h3>
			</div>
			<div>
				<section className="text-center">
					<Cart cart={cart}></Cart>
				</section>
				<br />
				<Row xs={1} md={3} className="g-4 ">
					{programmers.map((pg) => {
						// console.log(pg.first_name);
						const { id } = pg;
						return (
							<Fragment key={id}>
								<Programmer programmer={pg} handleAddToCart={handleAddToCart}></Programmer>
							</Fragment>
						);
					})}
				</Row>
			</div>
		</>
	);
};

export default ProgrammersState;
