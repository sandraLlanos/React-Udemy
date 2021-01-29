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
export const greetingArrow2 = () => ({
        uuid: 'ABC123',
        userName: 'Sandra M'
});
export const getUser = () => ({
        uuid: 'ABC123',
        userName: 'Sandra M'
});

export const getActiveUser = name => ({
        uuid: 'ABC123',
        userName: name
})

const activeUser = getActiveUser('sandra');

console.log('activeUser', getActiveUser('Marcela'));
console.log('activeUser', activeUser);
console.log(greeting('sandra'));
console.log(greetingArrow2());
console.log(greetingArrow('marcela'));