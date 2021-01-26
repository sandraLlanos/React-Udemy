import React from 'react';

const FirstAppDataTypes = () => {
    const string = 'Hello World!!';
    const number = 123;
    const double = 123.123;
    const bool = true;
    const object = {
        name: 'sandra',
        lastName: 'llanos',
    };
    return (
        <>
            <h1>{ string }</h1>
            <h1>{ number }</h1>
            <h1>{ double }</h1>
            <h1>{ bool }</h1> {/* I can't show */}
            <h1>{ object }</h1> {/*  I can't show directly */}
            <pre>{ JSON.stringify( object, null, 3 ) }</pre>
            <p> My first Aplication </p>
        </>
    )

}

export default FirstAppDataTypes;