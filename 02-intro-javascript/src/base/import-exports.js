import heroes, {owners} from '../data/heroes'

console.log(owners);

export const getHeroeById = (id) => heroes.find(hero => hero.id === id );
console.log(getHeroeById(5));

export const getHeroeByOwner = (owner) => heroes.filter( hero => hero.owner === owner );
console.log(getHeroeByOwner('DC'));