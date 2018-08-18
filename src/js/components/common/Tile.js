import React from 'react';
import PropTypes from 'prop-types';

const Tile = ({ width, height, children }) => {
    const styles = {
        tile: {
            display: 'inline-block',
            padding: '1cm',
            backgroundColor: 'white',
            width: width || '4cm',
            height: height || '4cm',
            borderRadius: '10pt',
            boxShadow: '#4a4a4a 6px 6px 20px'
        }
    };

    return <div className='tile' style={styles.tile}>{children}</div>;
};

Tile.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    children: PropTypes.node
};

export default Tile;