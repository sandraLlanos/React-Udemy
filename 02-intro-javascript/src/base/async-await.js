// Async await

const getImagenPromesa = () => {
    const promise = new Promise( ( resolve, reject ) => {
        resolve('https://anyThing')
    })
    return promise;
}
getImagenPromesa().then( console.log );

// async makes a function asynchronous that returns a promise
const getImage = async() => {
    return 'https://anyThing-Async';
}
getImage().then( console.log );

const getImageWithAwait = async() => {
    const apiKey = 'XRnsOEVygIHs5bH4hMpOall24oypnnmH';
    const resp =  await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const { data } = await resp.json();
    const {url} = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);

    console.log(data);
}
export const getImageTest = async() => {
    try{
        const apiKey = 'XRnsOEVygIHs5bH4hMpOall24oypnnmH';
        const resp =  await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
        const {url} = data.images.original;
        return url;
    } catch (error) {
        return 'Does not exist';
    }
}

getImageWithAwait();
