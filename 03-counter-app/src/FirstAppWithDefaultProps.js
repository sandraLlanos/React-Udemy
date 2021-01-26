import React from 'react';

const FirstAppWithDefaultProps = ({ greeting = "Hello, this is a Default prop" }) => {

    return (
        <>
            <h1> { greeting } </h1>
            <p> My first Aplication </p>
        </>
    )

}

export default FirstAppWithDefaultProps;