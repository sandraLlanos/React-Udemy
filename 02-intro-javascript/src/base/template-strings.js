// template strings

const name = 'Sandra';
const lastNme = 'llanos';
const fullName = name + ' ' + lastNme;
const fullNameTemplate = `
${ name }
${ lastNme }
${ 1 + 1 }
`;
console.log(fullName); 
console.log(fullNameTemplate); 

export function getGetting(name) {
    return 'Hello ' + name;
}

console.log(` This is a text: ${getGetting()} `);