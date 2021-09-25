import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Programmer.css';

const Programmer = (props) => {
	console.log(props.programmer);
	const { first_name, last_name, ProgrammerPhoto, position, salary } = props.programmer;
	return (
		<Col>
			<Card className="programmers">
				<Card.Img variant="top" src={ProgrammerPhoto} />
				<Card.Body>
					<Card.Title>
						{first_name} {last_name}
					</Card.Title>
					<Card.Text>Job : {position} </Card.Text>
					<Card.Text>Demand : ${salary} </Card.Text>
					<Button className="hire-btn" variant="outline-secondary" size="sm">
						Hire Now
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default Programmer;
