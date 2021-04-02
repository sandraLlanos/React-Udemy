import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from "../../components/AddCategory";

describe('test in AddCategory component', () => {

    // const setCategories = () => {};
    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={setCategories}/> );

    beforeEach( () => {
        jest.clearAllMocks(); 
        wrapper = shallow( <AddCategory setCategories={setCategories}/> );
    });

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
    test('should not sent the information with submit', () => {
        
        wrapper.find('form').simulate('submit', {preventDefault(){}})
        expect( setCategories ).not.toHaveBeenCalled();
    });
});