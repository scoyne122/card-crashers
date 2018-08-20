import React from 'react';
import PropTypes from 'prop-types';

const Tile = ({ children, padding, gridCoords }) => {
    const styles = {
        tile: {
            padding: padding || '1cm',
            backgroundColor: 'white',
            borderRadius: '10pt',
            boxSizing: 'border-box',
            boxShadow: '#4a4a4a 6px 6px 20px',
            gridColumnStart: gridCoords ? gridCoords[0][0] : 'default',
            gridColumnEnd: gridCoords ? gridCoords[1][0] : 'default',
            gridRowStart: gridCoords ? gridCoords[0][1] : 'default',
            gridRowEnd: gridCoords ? gridCoords[1][1] : 'default'
        }
    };

    return <div className='tile' style={styles.tile}>{children}</div>;
};

Tile.propTypes = {
    children: PropTypes.node,
    padding: PropTypes.string,
    gridCoords: PropTypes.array
};

export default Tile;