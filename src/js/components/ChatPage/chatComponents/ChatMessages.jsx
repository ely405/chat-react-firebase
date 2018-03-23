import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

import * as firebase from 'firebase';

import { Row } from 'react-bootstrap';

import { db } from '../../../firebase/index-firebase';
import Message from './Message.jsx';


class ChatMessages extends Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: [],
		};
	}

	componentDidMount() {
		db.readUserMessage((snapshot) => {
			const currentMessage = snapshot.val();
			const { messages } = this.state;
			if (currentMessage !== null) {
				this.setState({ messages: currentMessage });
			} else if (currentMessage === null) {
				this.setState({ messages: null });
			}
		});
	}

	componentDidUpdate() {
		const objDiv = document.getElementById('messageList');
		objDiv.scrollTop = objDiv.scrollHeight;
	}

	render() {
		const { messages } = this.state;
		const { userId } = this.props;
		let allMessages;
		if (messages != null) {
			allMessages = Object.keys(this.state.messages).map((i) => {
				let fromMe;
				if (userId === messages[i].userId) fromMe = true;
				return <Message
					key={i}
					username={messages[i].username}
					message={messages[i].text}
					fromMe={fromMe}
					messageHour={messages[i].messageHour}
					imgURL={messages[i].imgURL}
				/>;
			});
		}
		let component;
		if (messages === null) {
			component = 'no hay mensajes';
		} else if (allMessages.length > 0) {
			component = allMessages;
		 } else {
			component = <div className='d-flex flex-ali-center' id='messageList'>
				<Loader type="Oval" color="#FFF" height={35} width={35} className='loader'/>;
			</div>;
		 }

		return (
			<Row id='messageList' className='container-fluid pre-scrollable'>{component}</Row>
		);
	}
}

export default ChatMessages;