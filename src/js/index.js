import ReactDOM from 'react-dom';
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import Login from './components/Login/Login';
import Join from './components/Join/Join';
import Create from './components/Create/Create';
import Play from './components/Play/Play';

ReactDOM.render(
	<HashRouter>
		<Switch>
			<Route exact path='/' component={App} />
			<Route path='/login' component={Login} />
			<Route path='/join' component={Join} />
			<Route path='/create' component={Create} />
			<Route path='/play' component={Play} />
		</Switch>
	</HashRouter>,
	document.getElementById('app')
);