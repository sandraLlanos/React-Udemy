import React from 'react';
import PropTypes from 'prop-types';

const FirstAppDefaultPropsV2 = ({ title, subtitle }) => {

    return (
        <>
            <h1> {title} </h1>
            <p> {subtitle} </p>
        </>
    )

}

FirstAppDefaultPropsV2.propTypes = {
    // greeting: PropTypes.string,
    // greeting: PropTypes.string.isRequired,
}
FirstAppDefaultPropsV2.defaultProps = {
    title: "I'm a title",
    subtitle: "I'm a subtitle"
}

export default FirstAppDefaultPropsV2;