import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'jquery';
import 'bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx';

ReactDOM.render((
	<BrowserRouter>
		<App/>
	</BrowserRouter>), document.getElementById('root'));