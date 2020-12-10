// template strings

const nombre = 'Sandra';
const apellido = 'llanos';
const nombreCompleto = nombre + ' ' + apellido;
const nombreCompletoTemplate = `
${ nombre }
${ apellido }
${ 1 + 1 }
`;
console.log(nombreCompleto); 
console.log(nombreCompletoTemplate); 

function getSaludo() {
    return 'Hello World!'
}

console.log(` This is a text: ${getSaludo()} `);