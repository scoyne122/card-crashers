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

	constructor() {
		super();
		this.gameNameVal = '';
		this.gameCodeVal = '';
	}

	/**
	 * play the game with given id and code
	 * called when final button is clicked
	 */
	joinGame() {
		// check that both inputs are filled
		if (this.gameNameVal.length <= 0) {
			alert('Please enter a game name');
			return;
		}
		if (this.gameCodeVal.length <= 0) {
			alert('Please enter a game code');
		}
		// save game name and code
		localStorage.setItem('gameName', this.gameNameVal);
		localStorage.setItem('gameCode', this.gameCodeVal);
		// send them over to the game page
		this.props.history.push(`/play/${this.gameNameVal}_${this.gameCodeVal}`);
	}

	render() {
		return (
			<div style={styles.join}>
				<h2>Join a game</h2>
				<Input placeholder='Enter game name' onChange={e => this.gameNameVal = e.target.value}/>
				<br/><br/>
				<Input placeholder='Enter game code' onChange={e => this.gameCodeVal = e.target.value}/>
				<br/><br/>
				<Button text='Go!' onClick={this.joinGame.bind(this)}/>
			</div>
		);
	}

}

export default Join;