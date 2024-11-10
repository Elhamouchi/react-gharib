
// Booléen, Null,
// Undefined, Nombre, BigInt, Chaîne de caractères / String, Symbole

let firstname = 'abdellah';
firstname = "fasjkl";


console.log(firstname);
// console.log("variable: ", variable);


let A = ['A'];

let B = A;

console.log('==================')
console.log(B); // ['A']
console.log(A); // ['A']

B.push('B');
console.log('==================')

console.log(B); // ['A', 'B']
console.log(A); // ['A', 'B']

console.log('==================')


A.push("C");

console.log(B); // ['A', 'B', 'C']
console.log(A); // ['A', 'B', 'C']



// console.log(firstname);

// console.log(firstnameCopy);


