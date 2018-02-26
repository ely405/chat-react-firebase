import React, { Component } from 'react';
import $ from 'jquery';

import { Row, Col } from 'react-bootstrap';

import BaseForm from '../FormComponents/BaseForm.jsx';
import { auth } from '../../firebase/index-firebase';

import setNewState from '../../utils/setNewStateFunction';


class PasswordChangeForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
		};
	}
	passChangeElements = () => {
		const passChangeForm = {
			title: 'Cambia tu contraseña',
    		button: {
    			id: 'passChangeBtn',
				label: 'Cambiar mi contraseña',
    			onSubmitForm: (e, formData) => {
					e.preventDefault();
					const { passOne, passTwo } = formData;
    				auth.toPasswordChange(passOne).then(() => {
						alert('cambia mi contraseña');
    				}).catch((error) => {
						this.setState(setNewState('error', error));
    				});
				},
				handleBtnEnable: (err) => {
					const buttonId = this.passChangeElements().button.id;
					if (err.status === 'success') {
						$(`#${buttonId}`).prop('disabled', false);
					} else if (err.status === null || err.status === 'error') {
						$(`#${buttonId}`).prop('disabled', true);
					}
				},
    		},
    		fields: [{
				size: 12,
				name: 'passOne',
				id: 'passOne',
    			labelText: 'Contraseña',
    			type: 'password',
    			helpText: 'Ingresa tu contraseña',
    			validateOnChange: (value) => {
					const isValid = { status: 'success', message: '' };
					const { passOne, passTwo } = value;

					if (passOne.length < 6) {
						isValid.status = 'error';
						isValid.message = 'La contraseña debe tener al menos 6 dígitos';
					} else if (passOne !== passTwo && passTwo !== undefined) {
						isValid.status = 'error';
						isValid.message = 'Ambas contraseñas deben ser iguales.';
					}
    				return isValid;
    			},
    		}, {
				name: 'passTwo',
				size: 12,
				id: 'passTwo',
    			labelText: 'Repite tu contraseña',
    			type: 'password',
    			helpText: 'Vuelve a ingresar tu contraseña',
    			validateOnChange: (value) => {
					const isValid = { status: 'success', message: '' };
					const { passOne, passTwo } = value;

					if (passTwo.length < 6) {
						isValid.status = 'error';
						isValid.message = 'La contraseña debe tener al menos 6 dígitos';
					} else if (passOne === undefined) {
						isValid.status = 'error';
						isValid.message = '';
					} else if (passOne !== passTwo) {
						isValid.status = 'error';
						isValid.message = 'Ambas contraseñas deben ser iguales.';
					}
    				return isValid;
    			},
    		},

    		],
		};
		return passChangeForm;
	}

	render() {
    	return (
			<Row>
				<Col md={6} mdOffset={3}>
					<BaseForm
						title={this.passChangeElements().title}
						buttonLabel={this.passChangeElements().button.label}
						buttonId={this.passChangeElements().button.id}
						onSubmitForm={this.passChangeElements().button.onSubmitForm}
						fields={this.passChangeElements().fields}
						errorOnSubmit={this.state.error}
						btnEnable={this.passChangeElements().button.handleBtnEnable}
					/>
				</Col>
			</Row>
    	);
	}
}

export default PasswordChangeForm;