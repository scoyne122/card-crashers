import React from 'react';
import PropTypes from 'prop-types';

import Input from '../common/Input';
import Button from '../common/Button';
import { makeid } from '../../util/helperFuncs';

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

class NamePanel extends React.Component {
	constructor() {
		super();
		this.nameInputVal = '';
	}

	// check if screen name has been filled in
	// then change route to whatever param says
	checkAndChange(newRoute) {
		if (this.nameInputVal.length > 0) {
			// save the name and id in localstorage
			localStorage.setItem('screenName', this.nameInputVal);
			localStorage.setItem('id', makeid(8));
			// re route
			this.props.reRoute(newRoute);
		}
		else // if we get here, the name is empty
			alert('please fill in the name');
	}

	// called whenever the screen name input is changed
	nameChange(e) {
		this.nameInputVal = e.target.value;
	}

	render() {
		return (
			<div className='namePanel' style={styles.panel}>
				<h2>Get Started</h2>
				<p>Pick a screen name</p>
				<Input placeholder='JosieDaddy420' onChange={this.nameChange.bind(this)} maxLength={14} />
				<br/><br/><br/>
				<Button text='Join Game' onClick={() => this.checkAndChange('/join')} />
				<br/>
				<Button text='Create Game' onClick={() => this.checkAndChange('/create')} />
			</div>
	    );
	}
}

NamePanel.propTypes = {
	reRoute: PropTypes.func
};

export default NamePanel;