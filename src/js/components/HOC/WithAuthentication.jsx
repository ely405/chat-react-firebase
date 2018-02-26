import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { auth } from '../../firebase/index-firebase';

const withAuthentication = (ComponentWithAuth) => {
	class WithAuthentication extends Component {
		constructor(props) {
			super(props);
			this.state = {
				authenticatedUser: null,
			};
		}

		componentDidMount() {
			auth.getCurrentUser((user) => {
				user ? this.setState(() => ({ authenticatedUser: user })) : this.setState(() => ({ authenticatedUser: null }));
			});
		}

		render() {
			return (
				<ComponentWithAuth authUser={this.state.authenticatedUser}/>
			);
		}
	}

	withAuthentication.childContextTypes = {
		authenticatedUser: PropTypes.object,
	};

	return WithAuthentication;
};

export default withAuthentication;