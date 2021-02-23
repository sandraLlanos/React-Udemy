import React from 'react'

export const GifGrid = ( {category } ) => {

    const getGifs = async() => {
        const apiUrl = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=XRnsOEVygIHs5bH4hMpOall24oypnnmH';

        const resp = await fetch( apiUrl );
        const {data} = await resp.json();
        // console.log(data[0].id)
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        })
        console.log(gifs);
    }

    getGifs();

    return (
        <>
            <h3> {category} </h3>
            
        </>
    )
}
