import React, { Component } from 'react';

import { Col } from 'react-bootstrap';

import ImagesModal from './ImagesModal.jsx';

// const Message = (props) => {
// 	const smsFromMe = props.fromMe ? 'FromMe' : '';
// 	const img = props.imgURL ? <img src={props.imgURL} className='col-xs-10'/> : '';
// 	let component;
// 	if (props.fromMe) {
// 		component = <Col className={`message${smsFromMe} media-heading pull-right d-flex flex-col`} xsOffset={3} >
// 			<strong className='progress-bar'>{props.username}</strong>
// 			<div className={' flex-ali-end space-betw modal-footer'}>
// 				{img}
// 				<p className='nav'>{props.message}</p>
// 				<small className='media-right'>{props.messageHour}</small>
// 			</div>
// 		</Col>;
// 	} else {
// 		component = <Col className='message media-heading m-r-25pr pull-left d-flex flex-col'>
// 			<strong className='progress-bar'>{props.username}</strong>
// 			<div className='flex-ali-end space-betw modal-footer'>
// 				{img}
// 				<p className='nav'>{props.message}</p>
// 				<small className='media-right'>{props.messageHour}</small>
// 			</div>
// 		</Col>;
// 	}
// 	return (component);
// };

class Message extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
		};
	}

	handleCloseModal = () => {
    	this.setState({ show: false });
	}

	handleShowModal = () => {
		this.setState({ show: true });
	}

	render() {
		const {
			fromMe, imgURL, username, message, messageHour,
		} = this.props;
		const smsFromMe = fromMe ? 'FromMe' : '';
		const img = imgURL ? <img src={imgURL} className='col-xs-10' onClick={this.handleShowModal} /> : '';
		// const img = imgURL ? <img src={imgURL} className='col-xs-10' data-toggle="modal" data-target=".bs-example-modal-lg"/> : '';
		let component;
		if (fromMe) {
			component = <Col className={`message${smsFromMe} media-heading pull-right d-flex flex-col`} xsOffset={3} >
				<strong className='progress-bar'>{username}</strong>
				<div className={' flex-ali-end space-betw modal-footer'}>
					{img}
					<p className='nav'>{message}</p>
					<small className='media-right'>{messageHour}</small>
				</div>
				<ImagesModal showModal={this.state.show} closeModal={this.handleCloseModal} imgURL={imgURL}/>
			</Col>;
		} else {
			component = <Col className='message media-heading m-r-25pr pull-left d-flex flex-col'>
				<strong className='progress-bar'>{username}</strong>
				<div className='flex-ali-end space-betw modal-footer'>
					{img}
					<p className='nav'>{message}</p>
					<small className='media-right'>{messageHour}</small>
				</div>
				<ImagesModal showModal={this.state.show} closeModal={this.handleCloseModal} imgURL={imgURL}/>
			</Col>;
		}
		return (component);
	}
}


Message.defaultProps = {
	message: '',
	userEmail: '',
	fromMe: false,
};

export default Message;