const numbers = [2, 5, 23, 1, 565, 65, 200, 3];

// const res = numbers.some((number) => number > 150);

// console.log(res);

// numbers.some((number) => {
//   console.log(number);

//   return number > 150;
// });

////////////////////////////////

const res = numbers.every((number) => number < 1000);

console.log(res);
