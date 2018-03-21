import React, { Component } from 'react';
import $ from 'jquery';

import { Row, Col } from 'react-bootstrap';

import BaseForm from '../FormComponents/BaseForm.jsx';
import * as routes from '../../constants/routes';
import { auth, db } from '../../firebase/index-firebase';

import SignInLink from '../SignInPage/SignInLink.jsx';

const propKey = (propertyName, value) => () => ({
	[propertyName]: value,
});

class SignUpForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
		};
	}

    signUpElements = () => {
    	const signUpElem = {
    		title: 'Hola! Regístrate :)',
    		button: {
    			id: 'btnSignUp',
    			label: 'Regístrate',
    			onSubmitForm: (e, stateValue) => {
    				e.preventDefault();
    				const { history } = this.props;
    				const {
    					username, userEmail, passOne, passTwo,
    				} = stateValue;

    				auth.toRegisterNewUsers(userEmail, passOne).then((authUser) => {
    					db.createUserData(authUser.uid, username, userEmail)
    						.then(() => {
    							history.push(routes.SIGN_IN);
    							auth.updateUserData({ displayName: username }).then(() => {
    								alert('usuario actualizado');
    							}).catch((error) => {
    								this.setState(propKey('error', error));
    							});
    						})
    						.catch((error) => {
    							this.setState(propKey('error', error));
    						});
    				}).catch((error) => {
    					this.setState(propKey('error', error));
    				});
    			},
    			handleBtnEnable: (err) => {
    				const buttonId = this.signUpElements().button.id;
    				if (err.status === 'success') {
    					$(`#${buttonId}`).prop('disabled', false);
    				} else if (err.status === null || err.status === 'error') {
    					$(`#${buttonId}`).prop('disabled', true);
    				}
    			},
    		},
    		fields: [{
    			size: 12,
    			name: 'username',
    			id: 'inpUsername',
    			labelText: 'Nombre',
    			type: 'text',
    			helpText: 'Ingresa tu nombre',
    			validateOnChange: (value) => {
    				const isValid = { status: 'success', message: '' };
    				const buttonId = this.signUpElements().button.id;
    				const inpUsername = $('#inpUsername').val();

    				if (inpUsername.length < 3) {
    					isValid.status = 'error';
    					isValid.message = 'El nombre debe tener al menos 3 letras.';
    				}
    				return isValid;
    			},
    		}, {
    			name: 'userEmail',
    			size: 12,
    			id: 'inpUserEmail',
    			labelText: 'Correo',
    			type: 'email',
    			helpText: 'Ingresa tu correo',
    			validateOnChange: (value) => {
    				const buttonId = this.signUpElements().button.id;
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
    		}],
    	};
    	return signUpElem;
    }


    render() {
    	return (
    		<Row className='container-fluid flex-ali-center d-flex'>
    			<Col md={4} >
    				<h3 className='pager'>Regístrate</h3>
    				<BaseForm
    					title={this.signUpElements().title}
    					buttonLabel={this.signUpElements().button.label}
    					buttonId={this.signUpElements().button.id}
    					onSubmitForm={this.signUpElements().button.onSubmitForm}
    					fields={this.signUpElements().fields}
    					errorOnSubmit={this.state.error}
    					btnEnable={this.signUpElements().button.handleBtnEnable}
    				/>
    				<SignInLink/>
    			</Col>
    		</Row>
    	);
    }
}


export default SignUpForm;