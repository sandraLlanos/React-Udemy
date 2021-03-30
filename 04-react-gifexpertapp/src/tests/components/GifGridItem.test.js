import React from 'react';
import { shallow } from "enzyme";
import { GifGridItem } from '../../components/GifGridItem';

describe('test in <GifGridItem />', () => {

    const title = 'a title';
    const url = 'https://localhost/something.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('should show GifGridItem component successfully ', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('should be have a paragraph with a title', () => {
        const p = wrapper.find('p');
        console.log(p);
        expect(p.text().trim()).toBe(title);
    });
    test('should be have the image equals to url and alt', () => {
        const img = wrapper.find('img');
        console.log(img.html());
        console.log(img.props());
        console.log(img.props().src);
        console.log(img.prop('alt'));
        expect(img.props().src).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });
    test('should be have animate__fadeIn', () => {
        const div = wrapper.find('div');
        console.log(div.props().className);
        const className = div.prop('className');
        expect(className.includes('animate__fadeIn')).toBe(true);
    });
});