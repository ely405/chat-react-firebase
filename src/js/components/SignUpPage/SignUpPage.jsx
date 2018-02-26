import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import SignUpForm from './SignUpForm.jsx';

class SignUpPage extends Component {
    static propTypes = {
    	match: PropTypes.object.isRequired,
    	location: PropTypes.object.isRequired,
    	history: PropTypes.object.isRequired,
    }

    render() {
    	const { match, location, history } = this.props;
    	return (
    			<SignUpForm history={history}/>
    	);
    }
}

export default withRouter(SignUpPage);