const numbers1 = [1, 2, 3, 4];
const numbers2 = [5, 6, 7, 8];

numbers1.push(numbers2);
console.log(numbers1);

// numbers1.push.apply(numbers1, numbers2);
// console.log(numbers1);

// numbers1.push(5, 6, 7, 8);
// console.log(numbers1);

// numbers1.push(...numbers2);
// console.log(numbers1);

//////////////////////////////////////

const names = ['Fábio', 'Lima'];

function hi(first, last) {
  console.log(`Olá ${first} ${last}!`);
}

hi(...names);
