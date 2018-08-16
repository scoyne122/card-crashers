import React from 'react';
import PropTypes from 'prop-types';

// see hover styles in main.css
const styles = {
	input: {
		display: 'inline-block',
		outline: 'none',
		padding: '8pt',
		border: 'none',
		borderLeft: '2pt solid black',
		borderBottom: '2pt solid gray'
	}
};

const Input = ({ placeholder, onChange }) => {
	return <input className='input' style={styles.input} placeholder={placeholder} onChange={onChange} />;
};

Input.propTypes = {
	text: PropTypes.string, // text to display in button
	onChange: PropTypes.func
};

export default Input;