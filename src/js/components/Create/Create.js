import React from 'react';

import Input from '../common/Input';
import Button from '../common/Button';

const styles = {
	create: {
		width: '6cm',
		height: '100vh',
	}
};

class Create extends React.Component {

	render() {
		return (
			<div style={styles.create}>
				<h2>Create a game</h2>
				<Input placeholder='Choose a name'/>
				<h4>Your passcode is: abc123</h4>
				<Button text='got it!'/>
			</div>
		);
	}

}

export default Create;