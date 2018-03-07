import React, { Component } from 'react';

import { Col, Glyphicon, OverlayTrigger, Popover, Button } from 'react-bootstrap';


const UploadFile = props => (
	<Col xs={2}>
		<label htmlFor="imageUpload" id='btnAttachFile' className="btn btn-primary btn-outlined"><Glyphicon glyph="paperclip"/></label>
		<input
			id='imageUpload'
			type="file"
			onChange={e => props.handleUpLoad(e)}
			style={{ display: 'none' }}
			accept="image/*"
		/>
	</Col>
);


export default UploadFile;