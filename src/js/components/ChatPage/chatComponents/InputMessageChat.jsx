import React from 'react';

import Textarea from 'react-expanding-textarea';

import { Glyphicon, Button } from 'react-bootstrap';


const InputMessageChat = props => (
	<form className="chatInput" onSubmit={e => props.handleSubmitMessage(e)}>
		<Textarea
			rows="1"
			className="textarea col-xs-10 bg-white"
			placeholder="Escribe un mensaje"
			onChange={e => props.handleChangeInput(e)}
			value={props.chatInputValue}
			required/>
		<Button bsStyle="primary" className='col-xs-2' type='submit'><Glyphicon glyph="send"/></Button>
	</form>
);

export default InputMessageChat;