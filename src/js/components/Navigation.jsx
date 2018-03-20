import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';

import * as routes from '../constants/routes';
import SignOutButton from './SIgnOutButton.jsx';

import './navigation.css';

const NavigationAuth = props => (
	<Navbar collapseOnSelect fixedTop={true} className='bg-turquoise'>
		<Navbar.Header>
			<Navbar.Brand>
				<a href="/"> <Glyphicon glyph='envelope'/>  CHAT</a>
			</Navbar.Brand>
			<Navbar.Toggle />
		</Navbar.Header>
		<Navbar.Collapse>
			<Nav>
				<NavItem componentClass="span"><Link to={routes.LANDING} className='c-white'>Inicio</Link></NavItem>
				<NavItem componentClass="span"><Link to={routes.HOME} className='c-white'>Home</Link></NavItem>
				<NavItem componentClass="span"><Link to={routes.CHAT} className='c-white'>Chat</Link></NavItem>
			</Nav>
			<Nav pullRight>
				<NavItem componentClass="span"><SignOutButton authUserId={props.authUserId}/></NavItem>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
);

const NavigationNonAuth = () => (
	<Navbar collapseOnSelect fixedTop={true} className='bg-turquoise'>
		<Navbar.Header>
			<Navbar.Brand>
				<Link to={routes.LANDING} className='c-white'><Glyphicon glyph='envelope'/> CHAT</Link>
			</Navbar.Brand>
			<Navbar.Toggle />
		</Navbar.Header>
		<Navbar.Collapse>
			<Nav>
				<NavItem componentClass="span"><Link to={routes.LANDING} className='c-white'>Inicio</Link></NavItem>
				<NavItem componentClass="span"><Link to={routes.HOME} className='c-white'>Home</Link></NavItem>
				<NavItem componentClass="span"><Link to={routes.CHAT} className='c-white'>Chat</Link></NavItem>
			</Nav>
			<Nav pullRight>
				<NavItem componentClass="span"><Link to={routes.SIGN_UP} className='c-white'>Regístrate</Link></NavItem>
				<NavItem componentClass="span"><Link to={routes.SIGN_IN} className='c-white'>Inicia sesión</Link></NavItem>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
);

class Navigation extends Component {
	render() {
		const { authUser } = this.props;
		return (
			<div>
				{authUser ? <NavigationAuth authUserId={authUser.uid}/> : <NavigationNonAuth/> }
			</div>
		);
	}
}

export default Navigation;