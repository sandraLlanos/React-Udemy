// The conditional (ternary) operator

const active = false;
let message1 = '';

if (active) {
    message1 = 'Active';
} else {
    message1 = 'Inactive';
}
const message2 = (active) ? 'Active' : 'Inactive';
const message3 = (active) ? 'Active' : null;
const message4 = (active) &&  'Active'; //on the contrary is 'false'

console.log(message1);
console.log(message2);
console.log(message3);
console.log(message4);
