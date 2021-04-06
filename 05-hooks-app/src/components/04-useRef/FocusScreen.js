import React, { useRef } from 'react'
import '../02-useEffect/effects.css';

export const FocusScreen = () => {
    
    //useRef hook: to keep a mutable reference
    const inputRef = useRef();
    console.log('inputRef', inputRef);

    const handleClick = () => {
        // document.querySelector('input').select();
        inputRef.current.select();
    } 
    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />

            <input
                ref={inputRef}
                className="form-control"
                placeholder="your name"
            />
            <button 
                className="btn btn-primary mt-5"
                onClick={ handleClick }
            >
                Focus
            </button>
        </div>
    )
}
