import React from 'react';

import { Media, Col, Row } from 'react-bootstrap';

import SignUpForm from '../SignUpPage/SignUpForm.jsx';

import './landing.css';

import chatWithFriendsImage from '../../../img/chat-with-friends.jpg';

const LandingPage = () => (
	<Row className='d-flex flex-ali-center detail-container back-parallax' style={{ backgroundImage: `url('${chatWithFriendsImage}')` }}>
		<Col md={3}>
			<Media.Heading className='h2'>Envía mensajes gratis!</Media.Heading>
			<Media.Heading className='h3'>Donde y cuando quieras</Media.Heading>
		</Col>
		<Col md={8}>
			<SignUpForm/>
		</Col>
	</Row>
);

export default LandingPage;