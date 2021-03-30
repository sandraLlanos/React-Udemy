import { getGifs } from "../../helpers/getGifs";

describe('Test in gerGifs Fetch', () => {
    test('should be have 10 elements', async() => {
        // call a function
        const gifs = await getGifs('One puch');
        console.log(gifs);
        expect(gifs.length).toBe(10);
    });
    test('should be have 0', async() => {
        const gifs = await getGifs('');
        console.log(gifs);
        expect(gifs.length).toBe(0);
    });
});