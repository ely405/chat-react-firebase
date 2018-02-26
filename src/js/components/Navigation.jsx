import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';

import * as routes from '../constants/routes';
import SignOutButton from './SIgnOutButton.jsx';

import './navigation.css';

const NavigationAuth = () => (
	<Navbar collapseOnSelect fixedTop={true} className='bg-white'>
		<Navbar.Header>
			<Navbar.Brand>
				<a href="/"> <Glyphicon glyph='envelope'/>  CHAT</a>
			</Navbar.Brand>
			<Navbar.Toggle />
		</Navbar.Header>
		<Navbar.Collapse>
			<Nav>
				<NavItem componentClass="span"><Link to={routes.LANDING} className='c-black'>Inicio</Link></NavItem>
				<NavItem componentClass="span"><Link to={routes.HOME} className='c-black'>Home</Link></NavItem>
				<NavItem componentClass="span"><Link to={routes.CHAT} className='c-black'>Chat</Link></NavItem>
			</Nav>
			<Nav pullRight>
				<NavItem componentClass="span"><SignOutButton/></NavItem>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
);

const NavigationNonAuth = () => (
	<Navbar collapseOnSelect fixedTop={true} className='bg-white'>
		<Navbar.Header>
			<Navbar.Brand>
				<Link to={routes.LANDING}>CHAT</Link>
			</Navbar.Brand>
			<Navbar.Toggle />
		</Navbar.Header>
		<Navbar.Collapse>
			<Nav>
				<NavItem componentClass="span"><Link to={routes.LANDING} className='c-black'>Inicio</Link></NavItem>
				<NavItem componentClass="span"><Link to={routes.HOME} className='c-black'>Home</Link></NavItem>
				<NavItem componentClass="span"><Link to={routes.CHAT} className='c-black'>Chat</Link></NavItem>
			</Nav>
			<Nav pullRight>
				<NavItem componentClass="span"><Link to={routes.SIGN_UP} className='c-black'>Regístrate</Link></NavItem>
				<NavItem componentClass="span"><Link to={routes.SIGN_IN} className='c-black'>Inicia sesión</Link></NavItem>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
);

class Navigation extends Component {
	render() {
		const { authUser } = this.props;
		return (
			<div>
				{authUser ? <NavigationAuth/> : <NavigationNonAuth/> }
			</div>
		);
	}
}

export default Navigation;