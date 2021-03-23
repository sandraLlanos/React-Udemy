// import React, { useEffect, useState } from 'react'
// import { getGifs } from '../helpers/GetGifs';
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {
    console.log(category);

    const {data:images, loading} = useFetchGifs(category);
    console.log(loading)
    // const [images, setImages] = useState([]);

    // const [counter, setCounter] = useState(0); //for each call to Counter, the click makes a call to HTTP, for that reason we will use useEffect ()
    // useEffect( () => {
        // receives the function I want to execute
        // getGifs( category )
            // .then( imgs => setImages(imgs)) is exactly the same
            // .then( setImages )
    // }, [ category ]) //if the category change 

    // will be called in GifGrid component
    // const getGifs = async() => {
    //     const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=XRnsOEVygIHs5bH4hMpOall24oypnnmH`;

    //     const resp = await fetch( apiUrl );
    //     const { data } = await resp.json();
    //     console.log(data[0].id)
    //     const gifs = data.map(img => {
    //         return {
    //             id: img.id,
    //             title: img.title,
    //             url: img.images.downsized_medium.url
    //         }
    //     })
    //     console.log(gifs);
    //     setImages( gifs );
    // }

    // getGifs();

    return (
        <>
            <h3 className="animate__animated animate__fadeIn" > {category} </h3>
            { loading && <p className="animate__animated animate__flash" >Loading...</p> }
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
