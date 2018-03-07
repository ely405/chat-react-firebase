import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

import InputText from './fields/InputText.jsx';

import setNewState from '../../utils/setNewStateFunction';

class BaseForm extends Component {
	constructor(props) {
		super(props);
		this.title = this.props.title;
		this.onSubmitForm = this.props.onSubmitForm;
		this.buttonLabel = this.props.buttonLabel || 'OK';
		this.state = {
			fields: this.props.fields || [],
			noError: {
				status: null,
				message: '',
			},
			formData: {},
			errors: {},
		};
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.fields !== this.props.fields) {
			this.setState({ fields: nextProps.fields });
		}
		if (nextProps.inputValue !== this.props.inputValue) {
			this.setState({ userEmail: nextProps.inputValue });
		}
	}

    manageErrors = (key, error) => {
    	const { errors } = this.state;
    	if (!errors[key]) {
    		errors[key] = {};
    	}
    	errors[key] = {
    		status: error.status,
    		message: error.message,
    	};
    	this.setState({ errors });
    }

    validate = (key, validateFunction) => {
    	if (validateFunction) {
    		this.manageErrors(key, validateFunction(this.state.formData));
    	}
    }

    handleChange = (event, field) => {
    	const { formData, errors } = this.state;
    	formData[event.target.name] = event.target.value;
    	this.setState({ formData });
    	if (field.validateOnChange) {
    		this.validate(field.name, field.validateOnChange);
    	}
    }

	getElementClass = elementKey => `input ${elementKey}`;

	getElementValue = elementKey => this.state.formData[elementKey] || '';

	getElementErrors = elementKey => this.state.errors[elementKey] || this.state.noError;

	htmlComponent(field, idField) {
    	let htmlBox = '';

    	switch (field.type) {
    	case 'textarea':
    		htmlBox = '';
    		break;
    	default:
    		htmlBox = (
    			<InputText
					labelText={field.labelText}
					className={this.getElementClass(field.name)}
					helpText={field.helpText}
					size={field.size}
					name={field.name}
					type={field.type}
					onChange={e => this.handleChange(e, field)}
					id={field.id}
					key={field.name}
					validate={ e => this.validate(field.name, field.validateOnChange)}
					value={this.getElementValue(field.name)}
					error={this.getElementErrors(field.name)}
					btnEnable={this.props.btnEnable(this.getElementErrors(field.name))}
    			/>
    		);
    	}
    	return htmlBox;
	}

	render() {
		const allBoxes = this.state.fields.map((field, id) => this.htmlComponent(field, id));
		const { errorOnSubmit } = this.props;
    	return (
    		<form onSubmit={e => this.onSubmitForm(e, this.state.formData)}>
    			<h6>{this.props.title}</h6>
				{allBoxes}
				<button
					id={this.props.buttonId}
					className='btn btn-success col-xs-12'
					disabled
				>{this.buttonLabel}</button>
				{errorOnSubmit ? <p className='help-block'>{this.props.errorOnSubmit.message}</p> : ''}
    		</form>
    	);
	}
}

export default BaseForm;