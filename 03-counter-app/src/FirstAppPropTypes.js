import React from 'react';
import PropTypes from 'prop-types';

const FirstAppPropTypes = ({ greeting }) => {

    return (
        <>
            <h1> { greeting } </h1>
            <p> My first Aplication </p>
        </>
    )

}

FirstAppPropTypes.propTypes = {
    // greeting: PropTypes.string,
    greeting: PropTypes.string.isRequired,
}


export default FirstAppPropTypes;