import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withAuthorization from './HOC/WithAuthorization.jsx';

const AdminPage = props => (
	<div>
		<h1>Administrador</h1>
		<p>Área restringida, solo usuarios con autorización de administrador</p>
	</div>
);

const authCondition = authUser => !!authUser && authUser.role === 'ADMIN';

export default withAuthorization(authCondition)(AdminPage);