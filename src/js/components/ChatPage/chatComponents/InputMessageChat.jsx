import React from 'react';

import { Glyphicon, Button } from 'react-bootstrap';
import Textarea from 'react-expanding-textarea';

import UploadFile from './UploadFile.jsx';

const InputMessageChat = (props) => {
	const imageOrText = props.imgSrc ? <img src={props.imgSrc} className='col-xs-8' alt=""/> : <Textarea
		id='textMessage'
		rows="1"
		className="textarea col-xs-9 bg-white"
		placeholder="Escribe un mensaje"
		onChange={e => props.handleChangeInput(e)}
		value={props.chatInputValue}
	/>;
	return (
		<form className="chatInput" onSubmit={e => props.handleSubmitMessage(e)}>
			{imageOrText}
			<UploadFile handleUpLoad={props.handleUpLoad}/>
			<Button bsStyle="primary" className='col-xs-1' type='submit'><Glyphicon glyph="send"/></Button>
		</form>
	);
};


export default InputMessageChat;