import React from 'react';
import { GifExpertApp } from "../GifExpertApp";
import { shallow } from "enzyme";

describe('test in <GifExpertApp /> component', () => {
    
    test('should show GifExpertApp component successfully' , () => {
        
        const wrapper = shallow( <GifExpertApp /> );
        expect(wrapper).toMatchSnapshot();
    
    });
    test('should show a list of categories', () => {
        const categories = ['One Punch', 'Goku'];
        const wrapper = shallow( <GifExpertApp defaultCategories={categories} /> );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });

});