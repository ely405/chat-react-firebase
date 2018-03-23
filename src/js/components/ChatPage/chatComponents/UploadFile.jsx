import React, { Component } from 'react';

import { Col, Glyphicon, OverlayTrigger, Popover, Button } from 'react-bootstrap';


const UploadFile = props => (
	<span>
		<label htmlFor="imageUpload" id='btnAttachFile' className="btn btn-primary btn-outlined col-xs-1"><Glyphicon glyph="paperclip"/></label>
		<input
			id='imageUpload'
			type="file"
			onChange={e => props.handleUpLoad(e)}
			style={{ display: 'none' }}
			accept="image/*"
		/>
	</span>
);


export default UploadFile;