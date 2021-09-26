import { faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import './Programmer.css';

const Programmer = (props) => {
	// console.log(props.programmer);
	const { name, ProgrammerPhoto, position, demand, gender, done } = props.programmer;
	const { handleAddToCart, programmer } = props;
	// const gitIcon = <FontAwesomeIcon icon={faGithubAlt} />;

	return (
		<Col>
			<Card className="programmers">
				<Card.Img variant="top" src={ProgrammerPhoto} className="rounded-circle" style={{ height: '400px' }} />
				<Card.Body>
					<Card.Title>{name}</Card.Title>
					<Card.Text>Job: {position} </Card.Text>
					<Card.Text>Gender: {gender} </Card.Text>
					<Card.Text>Invention: {done} </Card.Text>
					<Card.Text>Demand: ${demand} million </Card.Text>

					<Button onClick={() => handleAddToCart(programmer)} variant="success" size="sm">
						<FontAwesomeIcon icon={faHandsHelping}></FontAwesomeIcon> Hire Now
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default Programmer;
