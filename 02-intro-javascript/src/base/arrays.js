// arrays

// I can use new array(), when I need to create arrays with a static size
const array = new Array(5);
array.push(1);
console.log(array);

// This is normal form to create a new array
const normalArray = [];
normalArray.push(1);
console.log(normalArray);

// coby by reference
const myArray = [1,2,3,4,5];
const myArray2 = myArray;
myArray2.push(6);
console.log('myArray', myArray);
console.log('myArray2', myArray2);

// copy by value
const myArray3 = [1,2,3,4,5];
const myArray4 = [...myArray3, 6];
console.log('myArra3', myArray3);
console.log('myArray4', myArray4);

// prototype map
// map returns a new array
const myArray5 = [2,4,6,8];
const myArray6 = myArray5.map(function(x) {
    return x * 2;
});
console.log('myArray6 without map',myArray5);
console.log('myArray6 with map',myArray6);
