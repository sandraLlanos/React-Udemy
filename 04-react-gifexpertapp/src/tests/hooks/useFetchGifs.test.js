import { renderHook } from '@testing-library/react-hooks'
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('test in useFetchGifs hook', () => {
    
    test('should return the initial state', () => {
        const { result } = renderHook( () => useFetchGifs('One Punch'));
        const { data, loading } =  result.current;
        console.log(data, loading);  
        expect( data ).toEqual([]);
        expect( loading ).toBe(true);
    });

});