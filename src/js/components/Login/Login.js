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

	render() {
		return (
		    <div style={styles.login}>
			    <NamePanel />
			</div>
		);
	}

}

export default Login;