import React from 'react';

import Input from '../common/Input';
import Button from '../common/Button';
import Tile from '../common/Tile';

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
				<div style={{ width: '26.5cm', display: 'inline-block', marginBottom: '0.5cm' }}>
					<Tile width="11cm" height="9cm">hello</Tile>
					<div width="1cm" style={{ width: '0.5cm', display: 'inline-block'}}/>
					<Tile width="11cm" height="9cm">Second</Tile>
				</div>
				<br/>
				<Tile width="24.5cm" height="auto" padding="0">Bottom</Tile>
			</div>
		);
	}

}

export default Play;
