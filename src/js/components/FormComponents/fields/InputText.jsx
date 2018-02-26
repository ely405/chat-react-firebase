import React, { Component } from 'react';
import { Col, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

const InputText = props => (
	<FormGroup
		validationState={props.error.status}
	>
		<ControlLabel>
			{props.labelText}
		</ControlLabel>
		<FormControl
			type={props.type}
			value={props.value}
			name={props.name}
			onChange={e => props.onChange(e, this)}
			className={props.className}
			onBlur={props.validate}
			key={props.id}
			id={props.id}
			placeholder={props.helpText}
		/>
		<FormControl.Feedback />
		<HelpBlock>{props.error.message}</HelpBlock>
	</FormGroup>
);

export default InputText;