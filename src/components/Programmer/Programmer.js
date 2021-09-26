import React from 'react';
import Button from '@restart/ui/esm/Button';
import { Card, Col } from 'react-bootstrap';

import './Programmer.css';

const Programmer = (props) => {
	console.log(props.programmer);
	const { name, ProgrammerPhoto, position, demand, gender, done } = props.programmer;

	return (
		<Col>
			<Card className="programmers">
				<Card.Img variant="top" src={ProgrammerPhoto} />
				<Card.Body>
					<Card.Title>{name}</Card.Title>
					<Card.Text>Job: {position} </Card.Text>
					<Card.Text>Gender: {gender} </Card.Text>
					<Card.Text>What he has done: {done} </Card.Text>
					<Card.Text>Demand: ${demand} </Card.Text>

					<Button onClick={() => props.handleAddToCart(props.programmer)} className="hire-btn" variant="outline-secondary" size="sm">
						Hire Now
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default Programmer;
