import { shallow } from "enzyme"
import CounterApp from "../CounterApp"

describe('test in <CounterApp /> component', () => {
    
    let wrapper = shallow( <CounterApp /> );
    beforeEach( () => {
        wrapper = shallow( <CounterApp /> );
        console.log('beforeEach');
    });

    test('should show <CounterApp /> correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    test('should show <CounterApp /> with value for default', () => {
        const val = 100;
        const wrapper = shallow( <CounterApp value={val}/> );
        const counterText = wrapper.find('h2').text().trim();
        // console.log(counterText);
        expect( counterText ).toBe(`${val}`);
    });
    test('should increase with a button +1', () => {
        // const btnOne = wrapper.find('button').at(2);
        // console.log(btnOne.html());
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe('11');
    });
    test('should decrease with a button -1', () => {
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe('9');
    });
    test('should reset value with a button reset', () => {
        const val = 100;
        const wrapper = shallow( <CounterApp value={val}/> );
        wrapper.find('button').at(2).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        console.log(counterText);
        expect( counterText ).toBe(`${val}`);
    });
    
    
})
