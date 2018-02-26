import React, { Component } from 'react';

import WithAuthorization from './HOC/WithAuthorization.jsx';
import { db } from '../firebase/index-firebase';

import PasswordForgetForm from './PasswordForgetPage/PasswordForgetForm.jsx';
import PasswordChangeForm from './PasswordChangePage/PasswordChangeForm.jsx';


class HomePage extends Component {
	render() {
		const { authUser } = this.props;
		return (
			<div>
				<h1>home {authUser.email}</h1>
				<PasswordForgetForm/>
				<PasswordChangeForm/>
			</div>
		);
	}
}

// comprueba que usuario no sea nulo
const authCondition = authUser => authUser != null;

export default WithAuthorization(authCondition)(HomePage);