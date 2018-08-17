import React from 'react';

import Input from '../common/Input';
import Button from '../common/Button';
import { makeid } from '../../util/helperFuncs';

const styles = {
	create: {
		width: '6cm',
		height: '100vh',
	}
};

class Create extends React.Component {

	constructor() {
		super();
		this.gameNameVal = '';
	}

	// called whenever the screen name input is changed
	nameChange(e) {
		this.gameNameVal = e.target.value;
	}

	/**
	 * save game name and create game code
	 * called when final button is clicked
	 */
	createGame() {
		// make sure we have input
		if (this.gameNameVal.length <= 0) {
			alert('Please enter a name for your game');
			return;
		}
		localStorage.setItem('gameName', this.gameNameVal);
		// create and save game code
		const gameCode = makeid();
		localStorage.setItem('gameCode', gameCode);
		// send them over to the game page
		this.props.history.push(`/play/${this.gameNameVal}_${gameCode}`);
	}

	render() {
		return (
			<div style={styles.create}>
				<h2>Create a game</h2>
				<Input placeholder='Choose a name' onChange={this.nameChange.bind(this)} maxLength={14}/>
				<br/><br/>
				<Button text='Create!'onClick={this.createGame.bind(this)}/>
			</div>
		);
	}

}

export default Create;