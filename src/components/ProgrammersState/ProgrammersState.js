import React, { Fragment, useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import fakeData from '../../resources/fakeData';
import Programmer from '../Programmer/Programmer';

const ProgrammersState = () => {
	const [programmers, setProgrammers] = useState([]);

	useEffect(() => {
		setProgrammers(fakeData);
		// console.log(programmers);
	}, [programmers]);

	return (
		<div>
			<h1>{programmers.length}</h1>
			<Row xs={1} md={3} className="g-4">
				{programmers.map((pg) => {
					// console.log(pg.first_name);
					return (
						<Fragment>
							<Programmer programmer={pg}></Programmer>
						</Fragment>
					);
				})}
			</Row>
		</div>
	);
};

export default ProgrammersState;
