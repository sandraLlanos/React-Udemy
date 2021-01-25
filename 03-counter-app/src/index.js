// Example to render element
import React from 'react'
import ReactDOM from 'react-dom'
import FirstApp from './FirstApp' 
import './index.css'

// console.log('Hello World!');
// const greeting = <h1>Hello World!</h1>;
// console.log(greeting);

// const divRoot = document.querySelector('#root');
// console.log(divRoot);

// ReactDOM.render(greeting, divRoot);

const divRoot = document.querySelector('#root');
ReactDOM.render(<FirstApp />, divRoot);