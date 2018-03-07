import React, { Component } from 'react';

import uuidv4 from 'uuid/v4';
import { auth, db, st } from '../../../firebase/index-firebase';

import ChatMessages from './ChatMessages.jsx';
import InputMessageChat from './InputMessageChat.jsx';

import '../chat.css';

class Chat extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lastMessage: '',
			messageCount: 0,
			files: '',
			progress: 0,
		};
	}

	updateLastMessage = (e) => {
		const messageText = e.target.value;
		this.setState({ lastMessage: messageText });
	}

	handleSubmitMessage = (e) => {
		e.preventDefault();
		const {
			lastMessage, files, progress,
		} = this.state;
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
			progress,
		};

		if (files) {
			const uploadTask = st.uploadFile(files[0], files[0].name);

			uploadTask.on('state_changed', (snapshot) => {
				const progressPer = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				this.setState({ progress: progressPer });
				console.log(`Upload is ${progressPer}% done`, this.state);
			}, (err) => {
				console.log('error al subir', err);
			}, () => {
				const { downloadURL } = uploadTask.snapshot;
				newMessage.imgURL = downloadURL;
				db.saveUserMessage(newMessage, userId, userId);
			});

			if (newMessage.imgURL) {
				db.saveUserMessage(newMessage, userId, userId);
			}
		} else {
			db.saveUserMessage(newMessage, userId, userId);
		}
		this.setState({ lastMessage: '', user: '', files: '' });
	}

	handleUpLoad = (e) => {
		this.setState({ files: e.target.files });
		console.log('file', e.target.value);
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
					handleSubmitMessage={this.handleSubmitMessage}
					handleUpLoad={this.handleUpLoad}
				/>
			</div>
		);
	}
}

export default Chat;