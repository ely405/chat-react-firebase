import React from 'react';

import { Col, Row } from 'react-bootstrap';

import SignUpForm from '../SignUpPage/SignUpForm.jsx';

import './landing.css';

import chatWithFriendsImage from '../../../img/chat-with-friends.jpg';

const LandingPage = () => (
	<Row className='d-flex flex-ali-center detail-container back-parallax' style={{ backgroundImage: `url('${chatWithFriendsImage}')` }}>
		<Col md={3}>
			<h2>Envía mensajes gratis!</h2>
			<h3>Donde y cuando quieras</h3>
			<h5 className='hidden-xs'>Disfruta de los mensajes gratuitos de forma instantánea en cualquier momento y desde cualquier lugar.
             	No sólo puedes chatear con una, sino con varias personas a la vez.</h5>
		</Col>
		<Col md={8}>
			<SignUpForm/>
		</Col>
	</Row>
);

export default LandingPage;