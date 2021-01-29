// Destructuring 

const person = {
    name: 'sandra',
    lastName: 'llanos',
    age: 30,
    key: 'Iroman'
}

// const { name, lastName, age } = person
// console.log(person.name);
// console.log(name, lastName, age);

// Three differents ways for to do Destructuring
// const returnPerson = ( user ) => {
    //      console.log(user);
    // }
// const returnPerson = ( user ) => {
//     const { name, lastName, age } = user
//     console.log(name, lastName, age);
// }
const returnPerson = ( {name, lastName, age} ) => {
    console.log(name, lastName, age);
}

returnPerson(person);

const context = ({ key, age }) => {
    return {
        keyName: key,
        years: age
    }
}

const { keyName, years } = context(person);
console.log(keyName, years);
