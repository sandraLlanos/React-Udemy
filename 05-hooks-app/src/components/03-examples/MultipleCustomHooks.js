import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css'

export const MultipleCustomHooks = () => {
    const {counter, increment} = useCounter(1);
    console.log(counter);
    const {data, loading} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    // null == null / !null =  true / !!null = false
    const {author, quote} = !!data && data[0];
    console.log(author, quote);

    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr />
            {
                loading 
                ? 
                    (
                        <div className="alert alert-info text-center">loading...</div>
                    )
                :
                    (
                        <blockquote className="blockquote text-right">
                            <p>{quote}</p>
                            <footer className="blockquote-footer">{author}</footer>
                        </blockquote>
        
                    )
            }
            <button className="btn btn-primary mb-2" onClick={ increment } >Next Quote</button>

        </div>
    )
}
