import React from 'react';

import { Media, Col, Row } from 'react-bootstrap';

import SignUpForm from '../SignUpPage/SignUpForm.jsx';

import './landing.css';

import chatWithFriendsImage from '../../../img/chat-with-friends.jpg';

const LandingPage = () => (
	<div className="back-parallax" style={{ backgroundImage: `url('${chatWithFriendsImage}')` }}>
		<Row className='d-flex flex-ali-center detail-container radio'>
			<Col md={4}>
				<Media.Heading className='h1'>Envía mensajes gratis</Media.Heading>
				<Media.Heading className='h1'>Donde y cuando quieras</Media.Heading>
				<p>Disfruta de los mensajes gratuitos de forma instantánea en cualquier momento y desde cualquier lugar.
            	No sólo puedes chatear con una, sino con varias personas a la vez.</p>
			</Col>
		</Row>
		<SignUpForm/>
	</div>
);

export default LandingPage;