import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value = 10 }) => {
    
    // const state = useState('Goku');
    // console.log( state ); // ["Goku", f]

    // const [ nombre, setNombre ] = useState('Goku');
    // console.log(nombre, setNombre);

    const [counter, setCounter] = useState( value );
    const handleAdd = () => {
        setCounter( counter + 1 ); // I'm modifying state hook not counter constant
        // setCounter( (count) => count + 1 ) // this is other way
    }
    // const handleAdd = (e) => {
    //     console.log(e);
    // }

    const handleSubtract = () => {
        setCounter(counter - 1 );
    }
    const handleReset = () => {
        setCounter(value);
    }
    return (
        <div className="wrapper">
           <h1>CounterApp</h1>
           <h1> Initial Value:{ value } </h1> 
           <h2> { counter } </h2> 
            <div>
                {/* <button onClick={ (e) => handleAdd(e) }>+1</button> */}
                <button onClick={ handleSubtract }>-1</button>
                <button onClick={ handleReset }>Reset</button>
                <button onClick={ handleAdd }>+1</button>
            </div>
        </div>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number,
}

export default CounterApp
