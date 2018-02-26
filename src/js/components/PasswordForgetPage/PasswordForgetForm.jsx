import React, { Component } from 'react';
import $ from 'jquery';

import { Grid, Row, Col } from 'react-bootstrap';


import { auth } from '../../firebase/index-firebase';

import BaseForm from '../FormComponents/BaseForm.jsx';

import setNewState from '../../utils/setNewStateFunction';

class PasswordForgetForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
		};
	}
    passwordForgetFormElements = () => {
    	const passForgetElem = {
    		title: 'Restablece tu contraseña',
    		button: {
    			id: 'passBtnSend',
    			label: 'Cambiar mi contraseña',
    			onSubmitForm: (e, formData) => {
    				e.preventDefault();
    				const { email } = formData;
    				auth.toPasswordReset(email).then(() => {
    					this.setState(setNewState('error', null));
    					alert('revisa tu correo');
    				}).catch((error) => {
    					this.setState(setNewState('error', error));
    				});
    			},
    			handleBtnEnable: (err) => {
    				const buttonId = this.passwordForgetFormElements().button.id;
    				if (err.status === 'success') {
    					$(`#${buttonId}`).prop('disabled', false);
    				} else if (err.status === null || err.status === 'error') {
    					$(`#${buttonId}`).prop('disabled', true);
    				}
    			},
    		},
    		fields: [{
    			size: 12,
    			name: 'email',
    			labelText: 'Correo',
    			type: 'email',
    			helpText: 'Ingresa tu correo',
    			validateOnChange: (value) => {
    				const isValid = { status: 'success', message: '' };
    				const regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    				if (!regex.test(value.email)) {
    					isValid.status = 'error';
    					isValid.message = 'El correo electrónico no tiene un formato válido';
    				}
    				return isValid;
    			},
    		}],
    	};
    	return passForgetElem;
    }

    render() {
    	return (
    		<Row>
    			<Col md={6} mdOffset={3}>
    				<BaseForm
    					title={this.passwordForgetFormElements().title}
    					buttonLabel={this.passwordForgetFormElements().button.label}
    					buttonId={this.passwordForgetFormElements().button.id}
    					onSubmitForm={this.passwordForgetFormElements().button.onSubmitForm}
    					fields={this.passwordForgetFormElements().fields}
    					errorOnSubmit={this.state.error}
    					btnEnable={this.passwordForgetFormElements().button.handleBtnEnable}

    				/>
    			</Col>
    		</Row>
    	);
    }
}

export default PasswordForgetForm;