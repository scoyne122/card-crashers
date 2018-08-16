import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App';
import Login from './components/Login';
import { HashRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
	<HashRouter>
		<Switch>
			<Route exact path='/' component={App} />
			<Route path='/login' component={Login} />
		</Switch>
	</HashRouter>,
	document.getElementById('app')
);