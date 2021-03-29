import React from 'react';
import { shallow } from "enzyme";
import { GifGridItem } from '../../components/GifGridItem';

describe('test in <GifGridItem />', () => {
    
    test('should show GifGridItem component successfully ', () => {
        const wrapper = shallow( <GifGridItem /> );
        expect( wrapper ).toMatchSnapshot();
    });
});