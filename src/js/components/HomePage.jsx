import React, { Component } from 'react';

import WithAuthorization from './HOC/WithAuthorization.jsx';
import { db } from '../firebase/index-firebase';

import PasswordChangeForm from './PasswordChangePage/PasswordChangeForm.jsx';


class HomePage extends Component {
	render() {
		const { authUser } = this.props;
		return (
			<div>
				<h1>Hola!</h1>
				<p>{authUser.email}</p>
				<PasswordChangeForm/>
			</div>
		);
	}
}

const authCondition = authUser => authUser != null;

export default WithAuthorization(authCondition)(HomePage);