import React from 'react';

const FirstAppWithProps = ( props ) => {
    console.log(props);
    return (
        <>
            <h1> { props.greeting } </h1>            
            <p> My first Aplication </p>
        </>
    )

}

export default FirstAppWithProps;