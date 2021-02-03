import { getHeroeById, getHeroeByOwner } from '../../base/import-exports';
import heroes, { owners } from '../../data/heroes';

describe('test in import-export file', () => {
    
    test('should be return a hero by id', () => {
        
        const id = 1;
        const hero = getHeroeById(id);
        const heroData = heroes.find( h => h.id === id );
        expect(hero).toEqual(heroData);

    });
    test('should be return undefined if hero does not exist', () => {
        
        const id = 100;
        const hero = getHeroeById(id);
        expect(hero).toBe(undefined); // Undefine is a primitive of js so I can us toBe.

    });

    test('should be return an array with all DC heroes', () => {
        
        const owner = 'DC';
        const hero = getHeroeByOwner(owner);
        const heroData = heroes.filter( h => h.owner === owner);
        expect(hero).toEqual(heroData); 

    });

    test('should be return an array with all Marvel heroes', () => {
        
        const owner = 'Marvel';
        const hero = getHeroeByOwner(owner);
        expect(hero.length).toBe( 2 ); 

    })
    

})
