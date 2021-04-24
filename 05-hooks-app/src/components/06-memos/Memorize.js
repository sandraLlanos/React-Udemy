import React from 'react'
import {useCounter} from '../../hooks/useCounter';
export const Memorize = () => {
    const { conunter, increment } = useCounter(10);
    return (
        <div>
            <h1>Counter: <small> {conunter} </small></h1>
            <hr/>

            <button>+1</button>
        </div>
    )
}
