// Fetch

const apiKey = 'XRnsOEVygIHs5bH4hMpOall24oypnnmH';
const request =  fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

/** this code is more defficult to understand  **/
// request.then( response => {
//     response.json().then(jsonResponse => {
//         console.log(jsonResponse);
//     })
//     .catch(console.warn);
// })
// .catch(console.warn);

/** It is better to use chain promises */

request.then( response => response.json())
       .then( ({ data }) => {
           const {url} = data.images.original;
           console.log( data.images.original.url );
           const img = document.createElement('img');
           img.src = url;
           document.body.append(img);
       })
       .catch( console.warn )
   
