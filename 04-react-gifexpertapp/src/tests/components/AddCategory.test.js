import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from "../../components/AddCategory";

describe('test in AddCategory component', () => {

    const setCategories = () => {}
    const wrapper = shallow( <AddCategory setCategories={setCategories}/> );
    test('should show it successfully', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('should change the input text', () => {
        const input = wrapper.find('input');
        // define event of input chage
        const value = 'Hello world'
        input.simulate('change', {target: { value: value } });
        expect(wrapper.find('p').text().trim()).toBe(value);
    });
});