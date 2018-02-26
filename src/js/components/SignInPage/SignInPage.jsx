import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Grid } from 'react-bootstrap';

import { SIGN_UP } from '../../constants/routes';
import SignUpLink from '../SignUpPage/SignUpLink.jsx';
import SignInForm from './SignInForm.jsx';
import PasswordForgetLInk from '../PasswordForgetPage/PasswordForgetLink.jsx';


class SignInPage extends Component {
    static propTypes = {
    	match: PropTypes.object.isRequired,
    	location: PropTypes.object.isRequired,
    	history: PropTypes.object.isRequired,
    }

    render() {
    	const { match, location, history } = this.props;
    	return (
    		<Grid>
    			<SignInForm history={history}/>
    			<PasswordForgetLInk/>
    			<SignUpLink/>
    		</Grid>
    	);
    }
}

export default withRouter(SignInPage);