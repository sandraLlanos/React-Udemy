// Promises

import { getHeroeById } from './bases/import-exports'

const getHeroeByIdAsync = (id) => {
    // rewturn new Promise((resolve, reject)=>{
    const promise = new Promise((resolve, reject)=>{
        setTimeout(() => {
            const hero = getHeroeById(id);
            if (hero){
                resolve( hero );
                console.log(hero);
                console.log('2 seconds later');
            } else {                
                reject('hero does not exist');
            }
        }, 2000);
    });
    return promise;
}
getHeroeByIdAsync(30).then( (hero) => {
    console.log('then of promise', hero);
})
.catch( (err) =>{
    console.warn('catch of promise', err);
})