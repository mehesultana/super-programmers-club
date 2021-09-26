import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header/Header';
import ProgrammersState from './components/ProgrammersState/ProgrammersState';

const App = () => {
	return (
		<Container>
			<Header />
			<ProgrammersState />
		</Container>
	);
};

export default App;
