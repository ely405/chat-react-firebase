import React from 'react';

import { Media, Col, Row } from 'react-bootstrap';

import SendMessageFreeImg from '../../../img/send_message_free.png';

const SendMessageFree = () => (
	<Row className='d-flex flex-ali-center detail-container radio'>
		<Media.Right className='col-md-6' >
			<img src={SendMessageFreeImg} alt='Send message free' className='img-responsive'/>
		</Media.Right>
		<Col md={4}>
			<Media.Heading className='h1'>Envía mensajes gratis</Media.Heading>
			<Media.Heading className='h1'>Donde y cuando quieras</Media.Heading>
			<p>Disfruta de los mensajes gratuitos de forma instantánea en cualquier momento y desde cualquier lugar.
            No sólo puedes chatear con una, sino con varias personas a la vez.</p>
		</Col>
	</Row>
);

export default SendMessageFree;