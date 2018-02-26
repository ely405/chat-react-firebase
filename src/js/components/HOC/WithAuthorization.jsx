import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { firebase } from '../../firebase/index-firebase';
import * as routes from '../../constants/routes';

const withAuthorization = authorizationCondition => (ComponentWithAuth) => {
	class WithAuthorization extends Component {
		constructor(props) {
			super(props);
			this.state = {
				authUser: null,
			};
		}

		componentDidMount() {
			firebase.auth.onAuthStateChanged((user) => {
				if (!authorizationCondition(user)) {
					this.props.history.push(routes.SIGN_IN);
				}
				this.setState(() => ({ authUser: user }));
			});
		}

		render() {
			return this.state.authUser ? <ComponentWithAuth authUser={this.state.authUser}/> : null;
		}
	}

	WithAuthorization.contextTypes = {
		authUser: PropTypes.object,
	};
	return withRouter(WithAuthorization);
};

export default withAuthorization;