import React from 'react';

import { Glyphicon, Button } from 'react-bootstrap';
import Textarea from 'react-expanding-textarea';

import UploadFile from './UploadFile.jsx';

const InputMessageChat = props => (
	<form className="chatInput" onSubmit={e => props.handleSubmitMessage(e)}>
		<Textarea
			rows="1"
			className="textarea col-xs-9 bg-white"
			placeholder="Escribe un mensaje"
			onChange={e => props.handleChangeInput(e)}
			value={props.chatInputValue}
		/>
		<UploadFile handleUpLoad={props.handleUpLoad} imgURL={props.imgURL} uploadPer={props.uploadPer}/>
		<Button bsStyle="primary" className='col-xs-1' type='submit'><Glyphicon glyph="send"/></Button>
	</form>
);

export default InputMessageChat;