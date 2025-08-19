// This is a simple JavaScript code snippet
console.log("Hello world from JS");


// Rules for using variables in JavaScript:
// 1. Variable names can contain letters, digits, underscores, and dollar signs.
// 2. Variable names must start with a letter, underscore, or dollar sign.
// 3. Variable names are case-sensitive.
// 4. Reserved keywords cannot be used as variable names (e.g., `var`, `let`, `const`, `function`, etc.).
// 5. Variable names should be descriptive and meaningful to improve code readability.

let name = 'Nakib';
console.log(name);

let firstName = 'Nakib';
let lastName = 'Ahmed';
console.log('Full Name:', firstName + ' ' + lastName);


// Primitive data types in JavaScript:

let newname = 'James'; // string
let age = 30; // number
let isEmployed = true; // boolean
let salary = null; // null
let address; // undefined


console.log('Name:', newname);
console.log('Age:', age);
console.log('Is Employed:', isEmployed);
console.log('Salary:', salary);
console.log('Address:', address);



// Dynamic typing in JavaScript allows variables to hold values of any type, and the type can change at runtime.

// Example of dynamic typing:
let dynamicVar = 'Hello'; // Initially a string
console.log('Dynamic Variable:', dynamicVar, 'Type:', typeof dynamicVar);
dynamicVar = 42; // Now a number
console.log('Dynamic Variable:', dynamicVar, 'Type:', typeof dynamicVar);

// Reference Types in JavaScript include objects, arrays, and functions. These types are stored as references in memory.

// objects to store multiple values
let person = {
    name: 'Cena',
    age: 35
};

// console.log('Person Object:', person);
// To access properties of an object, use dot notation or bracket notation
// dot notation
person.name = 'Mary';
console.log('Updated Name:', person.name);
// bracket notation
person['age'] = 36;
console.log('Updated Age:', person['age']);



// Arrays in JavaScript are used to store multiple values in a single variable.
let selectedColors = ['red', 'green', 'blue'];
selectedColors[3]= 'purple'; // changing the value at index 3 starts from 0
console.log('Selected Colors:', selectedColors);

// to access elements in an array, use the index
console.log('First Color:', selectedColors[0]);


// to insert a new color into the array
selectedColors.push('yellow');
console.log('Updated Colors:', selectedColors);

//// Functions in JavaScript are reusable blocks of code that perform a specific task. They can take parameters and return values.
function greet(name) {
    console.log('Hello' + ' ' + name);
};

greet('Wakil'); // calling the function to execute it



function square(number) {
    return number * number;
}

square(5); // calling the function to execute it
console.log('Square of 5:', square(5)); // Output: Square of 5: 25