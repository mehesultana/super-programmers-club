import React, { Fragment, useEffect, useState } from 'react';
import { FormControl, InputGroup, Row } from 'react-bootstrap';
import fakeData from '../../resources/fakeData';
import './ProgrammersState.css';
import Programmer from '../Programmer/Programmer';
import Cart from '../Cart/Cart';
import Button from '@restart/ui/esm/Button';

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
			<div className="body-header">
				<h1>Create Your Own Programming Team</h1>
				<h3>Total Budget : $500 Million</h3>
			</div>
			<div className="search-container">
				<InputGroup className="mb-3">
					<FormControl placeholder="Search Here" aria-label="Recipient's username" aria-describedby="basic-addon2" />
					<Button variant="outline-secondary" id="butto-addon2n">
						Search
					</Button>
				</InputGroup>
			</div>
			<div className=" Programmer-container">
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
