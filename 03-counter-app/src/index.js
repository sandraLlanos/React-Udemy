// Example to render element
import ReactDOM from 'react-dom'

console.log('Hello World!');
const greeting = <h1>Hello World!</h1>;
console.log(greeting);

const divRoot = document.querySelector('#root');
console.log(divRoot);

ReactDOM.render(greeting, divRoot);