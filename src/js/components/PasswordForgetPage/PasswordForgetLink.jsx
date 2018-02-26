import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../../constants/routes';

const PasswordForgetLInk = () => (
	<h6 className='pager'>Olvidé mi contraseña
	<Link to={routes.PASSWORD_FORGET}>Recupérala</Link>
	</h6>
);
export default PasswordForgetLInk;