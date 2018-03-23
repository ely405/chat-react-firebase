import React from 'react';

import { Col } from 'react-bootstrap';

const Message = (props) => {
	const smsFromMe = props.fromMe ? 'FromMe' : '';
	const img = props.imgURL ? <img src={props.imgURL} className='col-xs-10'/> : '';
	let component;
	if (props.fromMe) {
		component = <Col className={`message${smsFromMe} media-heading pull-right d-flex flex-col`} xsOffset={3} >
			<strong className='progress-bar'>{props.username}</strong>
			<div className={' flex-ali-end space-betw'}>
				{img}
				<p className='nav'>{props.message}</p>
				<small className='media-right'>{props.messageHour}</small>
			</div>
		</Col>;
	} else {
		component = <Col className='message media-heading m-r-25pr pull-left d-flex flex-col'>
			<strong className='progress-bar'>{props.username}</strong>
			<div className='flex-ali-end space-betw'>
				{img}
				<p className='nav'>{props.message}</p>
				<small className='media-right'>{props.messageHour}</small>
			</div>
		</Col>;
	}
	return (component);
};

Message.defaultProps = {
	message: '',
	userEmail: '',
	fromMe: false,
};

export default Message;