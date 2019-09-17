let a = 'a';
let b = 'b';

let aux = a;
a = b;
b = aux;

console.log(a, b);

// [b, a] = [a, b];
// console.log(a, b);
