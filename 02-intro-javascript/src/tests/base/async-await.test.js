import { getImageTest } from "../../base/async-await"

describe('test in async-await file', () => {
    
    test('should return the image url', async() => {
        
        const url = await getImageTest();
        console.log(url);
        expect( url.includes('https://') ).toBe( true );

    })
    

})
