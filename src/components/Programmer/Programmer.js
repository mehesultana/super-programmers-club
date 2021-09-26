import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import './Programmer.css';

const Programmer = (props) => {
	// console.log(props.programmer);
	const { name, ProgrammerPhoto, position, demand, gender, done } = props.programmer;
	const { handleAddToCart, programmer } = props;

	return (
		<Col className="Team">
			<Card className="programmers card">
				<Card.Img variant="top" src={ProgrammerPhoto} className=" Logo" />
				<Card.Body>
					<Card.Title>{name}</Card.Title>
					<Card.Text>Job: {position} </Card.Text>
					<Card.Text>Gender: {gender} </Card.Text>
					<Card.Text>Invention: {done} </Card.Text>
					<Card.Text>Demand: ${demand} million </Card.Text>
					<Button onClick={() => handleAddToCart(programmer)} variant="outline-success">
						Hire Now <FontAwesomeIcon icon={faArrowAltCircleRight} />
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default Programmer;
