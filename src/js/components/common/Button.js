import React from 'react';
import PropTypes from 'prop-types';

// see hover styles in main.css
const styles = {
	button: {
		display: 'block',
		fontSize: '1.2em',
		fontWeight: 'bold',
		padding: '0.3cm 1cm',
		textAlign: 'center',
		border: '2pt solid black',
		borderRadius: '1cm'
	}
};

const Button = ({ text }) => {
	return <div className='button' style={styles.button}>{text}</div>;
};

Button.propTypes = {
	text: PropTypes.string // text to display in button
};

export default Button;