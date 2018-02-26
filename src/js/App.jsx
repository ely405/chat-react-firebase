import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Grid } from 'react-bootstrap';

import Navigation from './components/Navigation.jsx';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import SignUpPage from './components/SignUpPage/SignUpPage.jsx';
import SignInPage from './components/SignInPage/SignInPage.jsx';
import PasswordForgetPage from './components/PasswordForgetPage/PasswordForgetPage.jsx';
import HomePage from './components/HomePage.jsx';
import ChatPage from './components/ChatPage/ChatPage.jsx';

import * as routes from './constants/routes';
import { firebase } from './firebase/index-firebase';
import WithAuthentication from './components/HOC/WithAuthentication.jsx';

import './app.css';

class App extends Component {
	render() {
		const { authUser } = this.props;
		return (
			<Router>
				<Grid className='containerApp' fluid>
					<Navigation authUser={authUser} />
					<Route exact path={routes.LANDING} component={() => <LandingPage />} />
					<Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
					<Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
					<Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
					<Route exact path={routes.HOME} component={() => <HomePage/>} />
					<Route exact path={routes.CHAT} component={() => <ChatPage/>} />
				</Grid>
			</Router>
		);
	}
}
export default WithAuthentication(App);