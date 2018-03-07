import React, { Component } from 'react';
import { auth } from '../firebase/index-firebase';

const SignOutButton = () => (
	<a
		onClick={auth.toCloseSession}
		className='c-black'
	>Cerrar sesión</a>
);

export default SignOutButton;