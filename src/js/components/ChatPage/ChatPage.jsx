import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'react-bootstrap';

import Chat from './chatComponents/Chat.jsx';
import withAutorization from '../HOC/WithAuthorization.jsx';

class AccountPage extends Component {
	render() {
		const { authUser } = this.props;
		return (
			<Chat userId={authUser.uid} username={authUser.displayName}/>
		);
	}
}
// comprueba que usuario no sea nulo
const authConditon = authUser => authUser != null;

export default withAutorization(authConditon)(AccountPage);