import { renderHook } from '@testing-library/react-hooks'
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('test in useFetchGifs hook', () => {
    
    test('should return the initial state', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch'));
        const { data, loading } =  result.current;
        console.log(data, loading);  
        await waitForNextUpdate();
        expect( data ).toEqual([]);
        expect( loading ).toBe(true);
    });
    test('should return an images array and the loading false', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch'));
        await waitForNextUpdate();
        const { data, loading } =  result.current;
        console.log(data, loading);  
        expect( data.length ).toBe(10);
        expect( loading ).toBe(false);

    });

});