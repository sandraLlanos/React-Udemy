// Functions

const greeting = function(name) {
    return `Hello ${name}`;
}

const greetingArrow = name => `Hello ${name}`;
// const greetingArrow2 = () => {
//     return {
//         uuid: 'ABC123',
//         userName: 'Sandra M'
//     }
// }

// using implicit object
const greetingArrow2 = () => ({
        uuid: 'ABC123',
        userName: 'Sandra M'
});

const getUsuarioActivo = nombre => ({
        uuid: 'ABC123',
        userName: nombre
    })

const usuarioActivo = getUsuarioActivo('sandra');

console.log('usuarioActivo', getUsuarioActivo('Marcela'));
console.log('usuarioActivo', usuarioActivo);
console.log(greeting('sandra'));
console.log(greetingArrow2());
console.log(greetingArrow('marcela'));