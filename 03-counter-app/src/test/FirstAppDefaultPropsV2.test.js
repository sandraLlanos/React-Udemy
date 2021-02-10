import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme'
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import FirstAppDefaultPropsV2 from "../FirstAppDefaultPropsV2";

describe('test in <FirstAppDefaultPropsV2 /> component', () => {
    
    xtest('should show the message "Hello, I am Goku"', () => {
        
        const saludo = "Hello";
        const { getByText } = render(<FirstAppDefaultPropsV2 greeting={saludo} />);
        expect(getByText(saludo)).toBe();

    })

    test('should show <FirstAppDefaultPropsV2> correctly', () => {
        const saludo = "Hello";
        const wrapper = shallow(<FirstAppDefaultPropsV2 greeting={saludo} />)
        expect( wrapper ).toMatchSnapshot();

    })
    
    

})
