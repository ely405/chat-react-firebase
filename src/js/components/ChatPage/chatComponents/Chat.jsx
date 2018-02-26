import React, { Component } from 'react';

import uuidv4 from 'uuid/v4';

import ChatMessages from './ChatMessages.jsx';
import InputMessageChat from './InputMessageChat.jsx';
import { auth, db } from '../../../firebase/index-firebase';

import '../chat.css';


class Chat extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lastMessage: '',
			messageCount: 0,
		};
	}

	updateLastMessage = (e) => {
		const messageText = e.target.value;
		this.setState({ lastMessage: messageText });
	}

	handleSubmitMessage = (e) => {
		e.preventDefault();
		const { lastMessage } = this.state;
		const { username, userId } = this.props;

		const dateFormat = new Date();
		const day = dateFormat.getUTCDate();
		const month = dateFormat.getMonth();
		const year = dateFormat.getFullYear();
		const hour = dateFormat.getHours();
		const minute = dateFormat.getMinutes();
		const seconds = dateFormat.getSeconds();

		const newMessage = {
			id: uuidv4(),
			userId,
			username,
			text: lastMessage,
			messageDate: `${day}/${month + 1}/${year}`,
			messageHour: `${hour}:${minute}:${seconds}`,
		};
		db.saveUserMessage(newMessage, userId, userId);
		this.setState({ lastMessage: '', user: '' });
	}

	render() {
		const { userId, username } = this.props;
		return (
			<div className='chatBox'>
				<h1>Chat {username}</h1>
				<ChatMessages userId={userId}/>
				<InputMessageChat
					onSend={this.handleSendMessage}
					chatInputValue={this.state.lastMessage}
					handleChangeInput={this.updateLastMessage}
					handleSubmitMessage={this.handleSubmitMessage}/>
			</div>
		);
	}
}

export default Chat;