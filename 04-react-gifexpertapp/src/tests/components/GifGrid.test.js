import React from 'react';
import { GifGrid } from "../../components/GifGrid";
import { shallow } from "enzyme";
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('test in <GifGrid /> component', () => {
    
    const category = 'One Punch';

    test('should load successfully', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( <GifGrid category={category} />)
        expect(wrapper).toMatchSnapshot();
    });
    test('should show items when the images has been loaded useFetchGifs', () => {
        
        const gifs = [{
            id: 'ABC',
            title: 'anything',
            url: 'https://localhost/anything.jpg'
        }]
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const wrapper = shallow( <GifGrid category={category} />)
        expect(wrapper).toMatchSnapshot();

    });

});