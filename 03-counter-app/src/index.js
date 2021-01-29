// Example to render element
import React from 'react'
import ReactDOM from 'react-dom'
// import FirstAppDataTypes from './FirstAppDataTypes';
// import FirstAppWithProps from './FirstAppWithProps';
// import FirstAppPropTypes from './FirstAppPropTypes' 
// import FirstAppWithDestProps from './FirstAppWithDestProps' 
// import FirstAppReturnFragment from './FirstAppReturnFragment' 
// import FirstAppWithDefaultProps from './FirstAppWithDefaultProps' 
// import FirstAppDefaultPropsV2 from './FirstAppDefaultPropsV2';
import CounterApp from './CounterApp';
import './index.css'

// console.log('Hello World!');
// const greeting = <h1>Hello World!</h1>;
// console.log(greeting);

// const divRoot = document.querySelector('#root');
// console.log(divRoot);

// ReactDOM.render(greeting, divRoot);

const divRoot = document.querySelector('#root');
// ReactDOM.render(<FirstAppReturnFragment />, divRoot);
// ReactDOM.render(<FirstAppDataTypes />, divRoot);
// ReactDOM.render(<FirstAppWithProps greeting="Hello, I am Goku" />, divRoot);
// ReactDOM.render(<FirstAppWithDestProps greeting="Hello, I am Goku" />, divRoot);
// ReactDOM.render(<FirstAppWithDefaultProps />, divRoot);
// ReactDOM.render(<FirstAppPropTypes />, divRoot);
// ReactDOM.render(<FirstAppDefaultPropsV2 />, divRoot);
ReactDOM.render(<CounterApp value={10} />, divRoot);