import React from 'react';
import PropTypes from 'prop-types';
import Input from '../common/Input';
import Button from '../common/Button';

// see hover styles in main.css
const styles = {
	panel: {
		backgroundColor: 'white',
		color: 'black',
		display: 'inline-block',
		float: 'right',
		padding: '2cm',
		height: '100vh',
		boxSizing: 'border-box'
	},
	button: {
		display: 'block',
		fontSize: '1.6em',
		fontWeight: 'bold',
		padding: '0.3cm 1cm',
		textAlign: 'center',
		border: '2pt solid black',
		borderRadius: '1cm'
	}
};

const NamePanel = ({ }) => {
	return (
		<div className='namePanel' style={styles.panel}>
			<h2>Get Started</h2>
			<p>Pick a screen name</p>
			<Input placeholder='JosieDaddy420' />
			<br/><br/><br/>
			<Button text='Join Game' />
			<br/>
			<Button text='Create Game' />
		</div>
	);
};

NamePanel.propTypes = {
	text: PropTypes.string // text to display in button
};

export default NamePanel;