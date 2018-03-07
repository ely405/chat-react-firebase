import React, { Component } from 'react';
import $ from 'jquery';

import { Row, Col } from 'react-bootstrap';

import BaseForm from '../FormComponents/BaseForm.jsx';
import { auth, db } from '../../firebase/index-firebase';

import * as routes from '../../constants/routes';

const propKey = (propertyName, value) => () => ({
	[propertyName]: value,
});


class SignInForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: '',
		};
	}

	signInElements = () => {
    	const signInElem = {
			title: 'Inicia sesión con correo',
    		button: {
    			id: 'btnSignIn',
				label: 'Inicia sesión',
				handleBtnEnable: (err) => {
					const buttonId = this.signInElements().button.id;
					if (err.status === 'success') {
						$(`#${buttonId}`).prop('disabled', false);
					} else if (err.status === null || err.status === 'error') {
						$(`#${buttonId}`).prop('disabled', true);
					}
				},
    			onSubmitForm: (e, stateValue) => {
					e.preventDefault();
					const { userEmail, password } = stateValue;
					const { history } = this.props;

					auth.getCurrentUser((user) => {
						if (user) {
						  db.saveConnectedUsersDb(user.uid, { userEmail, username: user.displayName, uid: user.uid });
						}
					});

					auth.toStartSession(userEmail, password).then(() => {
						history.push(routes.CHAT);
					}).catch((error) => {
						this.setState(propKey('error', error));
					});
    			},
    		},
    		fields: [{
    			name: 'userEmail',
    			size: 12,
    			id: 'inpUserEmail',
    			labelText: 'Correo',
    			type: 'email',
    			helpText: 'Ingresa tu correo',
    			validateOnChange: (value) => {
    				const isValid = { status: 'success', message: '' };
					const regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
					if (!regex.test(value.userEmail)) {
    					isValid.status = 'error';
						isValid.message = 'El correo electrónico no tiene un formato válido';
					}
    				return isValid;
    			},
    		}, {
    			size: 12,
    			name: 'password',
    			id: 'password',
    			labelText: 'Contraseña',
    			type: 'password',
    			helpText: 'Ingresa tu contraseña',
    			validateOnChange: (value) => {
    				const isValid = { status: 'success', message: '' };
					const { password } = value;
    				if (password === undefined || password.length < 6) {
    					isValid.status = 'error';
    					isValid.message = 'La contraseña debe tener al menos 6 digitos';
    				}
    				return isValid;
    			},
    		}],
    	};
    	return signInElem;
	}

	render() {
    	return (
			<Row>
				<Col md={4} mdOffset={4}>
					<h3 className='pager'>Acceder</h3>
					<BaseForm
						title={this.signInElements().title}
						buttonLabel={this.signInElements().button.label}
						buttonId={this.signInElements().button.id}
						onSubmitForm={this.signInElements().button.onSubmitForm}
						fields={this.signInElements().fields}
						errorOnSubmit={this.state.error}
						btnEnable={this.signInElements().button.handleBtnEnable}
					/>
				</Col>
			</Row>
    	);
	}
}

export default SignInForm;