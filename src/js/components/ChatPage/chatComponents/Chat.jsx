import React, { Component } from 'react';

import uuidv4 from 'uuid/v4';
import $ from 'jquery';
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
			file: '',
			loading: false,
			imgSrc: '',
		};
	}

	updateLastMessage = (e) => {
		const messageText = e.target.value;
		this.setState({ lastMessage: messageText });
	}

	handleSubmitMessage = (e) => {
		e.preventDefault();
		const {	lastMessage, file } = this.state;
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

		if (file) {
			const uploadTask = st.uploadFile(file, `${file.name}${uuidv4()}`);
			// then((snapshot) => {
			// 	newMessage.imgURL = snapshot.downloadURL;
			// 	this.setState({ loaded: true });
			// 	console.log('uploadFile', snapshot.downloadURL);
			// 	console.log('newMessage', newMessage)
			// 	db.saveUserMessage(newMessage, userId, userId);
			// }).catch(err => console.log('error', err));

			uploadTask.on('state_changed', (snapshot) => {
				this.setState({ loading: true });
			}, (err) => {
				console.log('error al subir', err);
				this.setState({ loading: false });
			}, () => {
				const { downloadURL } = uploadTask.snapshot;
				newMessage.imgURL = downloadURL;
				this.setState({ loading: false, imgSrc: '' });
				db.saveUserMessage(newMessage, userId, userId);
			});

			if (newMessage.imgURL) {
				db.saveUserMessage(newMessage, userId, userId);
			}
		} else {
			db.saveUserMessage(newMessage, userId, userId);
		}
		this.setState({ lastMessage: '', user: '', file: '' });
	}

	handleUpLoad = (e, file) => {
		const fileToUp = file || e.target.files[0];
		const reader = new FileReader();
		this.setState({ file: fileToUp });
		reader.onload = () => {
			this.setState({
				imgSrc: reader.result,
			});
		};
		reader.readAsDataURL(fileToUp);
	}

	render() {
		const { userId, username } = this.props;
		const { loading } = this.state;
		const loader = loading ? 'cargando...' : '';

		return (
			<div className='chatBox'>
				<h1>Chat {username}</h1>
				<ChatMessages userId={userId}/>
				<p>{loader}</p>
				<InputMessageChat
					onSend={this.handleSendMessage}
					chatInputValue={this.state.lastMessage}
					handleChangeInput={this.updateLastMessage}
					handleSubmitMessage={this.handleSubmitMessage}
					handleUpLoad={this.handleUpLoad}
					imgSrc={this.state.imgSrc}
				/>
			</div>
		);
	}
}

export default Chat;