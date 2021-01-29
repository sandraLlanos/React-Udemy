// literal objects

const person = {
    name: 'Sandra',
    lastName: 'Llanos',
    age: 30, 
    address: {
        city: 'New York',
        zip: 89777,
        lat: 45.564,
        lng: 67.90
    }   
}

console.table(person);
console.log('initial value', person );

// In this case I copy by reference of memory space.
const person2 = person;
person2.name = 'Marcela';

// In this case I clone the initial object.
const person3 = {...person };
person3.name = 'Maria';

console.log( 'person 2', person2 );
console.log('final value after person 2', person );
console.log( 'person 3', person3 );
console.log('final value after person 3', person );