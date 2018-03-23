import React, { Component } from 'react';

import { Col } from 'react-bootstrap';

import ImagesModal from './ImagesModal.jsx';

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
		const img = imgURL ? <div className="img-message" onClick={this.handleShowModal} style={{ backgroundImage: `url('${imgURL}')` }}></div> : '';
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