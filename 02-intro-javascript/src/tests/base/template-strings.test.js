import { getGetting } from "../../base/template-strings";

describe('test in template string file', () => {
    test('getGetting function should return "Hello Samdra"', () => {
        const name = 'Sandra';
        const getting = getGetting(name);
        expect( getting ).toBe( "Hello " + name )
    })
    
})
