import React from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value }) => {
    
    const handleAdd = (e) => {
        console.log(e);
    }

    return (
        <div className="wrapper">
           <h1>CounterApp</h1>
           <h2> { value } </h2> 
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
