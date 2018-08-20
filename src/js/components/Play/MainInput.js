import React from 'react';
import PropTypes from 'prop-types';

const MainInput = ({ width, padding, placeholder }) => {
    const styles = {
        mainInput: {
            outline: 'none',
            padding: padding || '6pt 1cm',
            backgroundColor: 'white',
            width: width || '100%',
            borderRadius: '2cm',
            border: '2pt solid gray',
            boxSizing: 'border-box',
            fontSize: '1.4em'
        }
    };

    return <input className='mainInput' placeholder={placeholder} style={styles.mainInput}/>;
};

MainInput.propTypes = {
    placeholder: PropTypes.string,
    width: PropTypes.string,
    padding: PropTypes.number
}

export default MainInput;