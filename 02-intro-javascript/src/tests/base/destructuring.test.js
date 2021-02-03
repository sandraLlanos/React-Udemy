import { returnArray } from "../../base/array-destructuring"

describe('test in array destructuring file', () => {

    test('should be return a string and a number', () => {        
        const arr = returnArray(); // ['ABC', 123]
        expect(arr).toEqual(['ABC', 123]);
    })
    test('should be return a string and a number destructuring', () => {        
        const [letters, numbers] = returnArray(); // ['ABC', 123]
        expect(letters).toEqual( 'ABC' );
        expect(numbers).toEqual( 123 );
        expect(typeof letters).toEqual('string');
        expect(typeof numbers).toEqual('number');
    })
    
})
