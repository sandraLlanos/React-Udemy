// array destructuring

const characters = ['Goku','Trunk', 'vegeta'];
characters.forEach(item => console.log(item));
console.log(characters[0]);

const [ , , p3 ] = characters;
console.log(p3);    

const returnArray = () => {
    return ['ABC', 123];
};

const [, p2] = returnArray();
console.log(p2);

const state = (value) => {
    return [value, () => {console.log('Hello world!')}]
}

const [nombre, setNombre]= state('Goku');
console.log(nombre); 
setNombre();