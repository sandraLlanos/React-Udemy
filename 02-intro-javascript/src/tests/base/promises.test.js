import { getHeroeByIdAsync } from '../../base/promises'
import heroes from '../../data/heroes';

describe('test in promises file', () => {
    
    test('should be return a async Hero', ( done ) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then( heroe => {
                expect( heroe  ).toBe( heroes[0] );
                done();
            })
    });

    test('should be get error if a Hero does not exist', ( done ) => {
        const id = 10;
        getHeroeByIdAsync(id)
            .catch( error => {
                expect( error  ).toBe( 'hero does not exist' );
                done();
            })
    });
    

})
