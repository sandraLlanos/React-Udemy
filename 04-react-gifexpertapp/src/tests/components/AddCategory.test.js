import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from "../../components/AddCategory";

describe('test in AddCategory component', () => {

    const setCategories = () => {}
    test('should show it successfully', () => {
        const wrapper = shallow( <AddCategory setCategories={setCategories}/> );
        expect(wrapper).toMatchSnapshot();
    });
});