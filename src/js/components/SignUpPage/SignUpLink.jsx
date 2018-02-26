import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../../constants/routes';

const SignUpLink = () => (
	<h6 className='pager'>¿No tienes cuenta?
	<Link to={routes.SIGN_UP}>Regístrate</Link>
	</h6>
);

export default SignUpLink;