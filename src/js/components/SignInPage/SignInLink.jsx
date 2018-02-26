import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../../constants/routes';

const SignInLink = () => (
	<h6 className='pager'>¿ya tienes una cuenta?
	<Link to={routes.SIGN_IN}>Ingresa!</Link>
	</h6>
);

export default SignInLink;