import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value }) => {
    
    // const state = useState('Goku');
    // console.log( state ); // ["Goku", f]

    // const [ nombre, setNombre ] = useState('Goku');
    // console.log(nombre, setNombre);

    const [counter, setCounter] = useState(0);
    const handleAdd = () => {
        setCounter( counter + 1 ); // I'm modifying state hook not counter constant
        // setCounter( (count) => count + 1 ) // this is other way
    }
    // const handleAdd = (e) => {
    //     console.log(e);
    // }

    return (
        <div className="wrapper">
           <h1>CounterApp</h1>
           <h2> { value } </h2> 
           <h2> { counter } </h2> 
            <div>
                {/* <button onClick={ (e) => handleAdd(e) }>+1</button> */}
                <button onClick={ handleAdd }>+1</button>
                <button>-1</button>
            </div>
        </div>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number,
}

export default CounterApp
