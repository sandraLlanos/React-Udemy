import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( {category } ) => {

    const [images, setImages] = useState([]);

    // const [counter, setCounter] = useState(0); //for each call to Counter, the click makes a call to HTTP, for that reason we will use useEffect ()
    useEffect( () => {
        // receives the function I want to execute
        getGifs()
    }, [])
    const getGifs = async() => {
        const apiUrl = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=XRnsOEVygIHs5bH4hMpOall24oypnnmH';

        const resp = await fetch( apiUrl );
        const { data } = await resp.json();
        // console.log(data[0].id)
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        })
        // console.log(gifs);
        setImages( gifs );
    }

    // getGifs();

    return (
        <>
            <h3> {category} </h3>
            <div className="card-grid" >
                {/* <h2>{counter}</h2> */}
                {/* <button onClick={() => setCounter( counter + 1 )}>click</button>  
                */}
                {
                        images.map( img => (
                            <GifGridItem 
                                key={img.id}
                                {...img}
                            />
                        ))
                }
            </div>
        </>
    )
}
