import React from 'react';

import Input from '../common/Input';
import Button from '../common/Button';
import Tile from '../common/Tile';
import MainInput from './MainInput';

const styles = {
	play: {
		width: '100vw',
		height: '100vh',
		backgroundImage: 'url("https://media.giphy.com/media/BlOY9MQiFKqIg/giphy.gif")',
		textAlign: 'center',
		padding: "01cm 0.5cm",
		boxSizing: 'border-box',
		overflow: 'scroll'
	}
};

class Play extends React.Component {

	render() {
		return (
			<div style={styles.play}>
				{/* <div style={{ width: '26.5cm', display: 'inline-block', marginBottom: '0.5cm' }}>
					<Tile width="6cm" height="9cm">hello</Tile>
					<div width="1cm" style={{ width: '0.5cm', display: 'inline-block'}}/>
					<Tile width="16cm" height="9cm">Second</Tile>
				</div>
				<br/>
				<Tile width="26cm" height="auto" padding="6pt">
					<MainInput width="23cm" placeholder="Write an answer here"/>
				</Tile> */}
				<div style={{
					display: 'grid',
					gridTemplateRows: '68vh auto',
					gridTemplateColumns: '8cm minmax(12cm, auto)',
  					gridGap: '0.5cm'
				}}>
					<Tile gridCoords={[[1, 1], [1, 3]]}>Players</Tile>
					<Tile gridCoords={[[2, 1], [2, 2]]}>Game</Tile>
					<Tile gridCoords={[[2, 2], [2, 3]]} padding="6pt">
						<MainInput width="100%" placeholder="Write an answer here"/>
					</Tile>
				</div>
			</div>
		);
	}

}

export default Play;
