import React, { Component } from 'react';

import { Col, Glyphicon } from 'react-bootstrap';

const UploadFile = props => (
	<Col xs={2}>
		<input 
			id='imageUpload' 
			type="file" 
			onChange={e => props.handleUpLoad(e)} 
			style={{display: 'none' }}
			// accept="image/*" 	
		/>
		<label htmlFor="imageUpload" className="btn btn-primary btn-outlined"><Glyphicon glyph="paperclip"/></label>
		{/* <img src={props.imgURL} alt=""/> */}
	</Col>
);

export default UploadFile;