import React from 'react';

import Input from '../common/Input';
import Button from '../common/Button';

const styles = {
	join: {
		width: '6cm',
		height: '100vh',
	}
};

class Join extends React.Component {

	render() {
		return (
			<div style={styles.join}>
				<h2>Join a game</h2>
				<Input placeholder='Enter game code'/>
				<br/><br/>
				<Button text='Go!'/>
			</div>
		);
	}

}

export default Join;