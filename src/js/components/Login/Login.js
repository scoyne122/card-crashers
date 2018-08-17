import React from 'react';
import NamePanel from './NamePanel';

const styles = {
	login: {
		width: '100vw',
		height: '100vh',
		backgroundImage: 'url("https://media.giphy.com/media/BlOY9MQiFKqIg/giphy.gif")'
	}
};

class Login extends React.Component {

	// pass as prop to children that need to change page
	reRoute(newRoute) {
		this.props.history.push(newRoute);
	}

	render() {
		return (
		    <div style={styles.login}>
			    <NamePanel reRoute={this.reRoute.bind(this)} />
			</div>
		);
	}

}

export default Login;