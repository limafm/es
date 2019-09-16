function calc(value1, value2, value3) {
  return value1 + (value2 * value3) + (value1 * value3);
}

// function calc(value1, value2, value3) {
//   if (value2 === undefined) {
//     value2 = 5;
//   }
//   // value2 = value2 || 5;

//   if (value3 === undefined) {
//     value3 = 6;
//   }
//   // value3 = value3 || 6;

//   return value1 + (value2 * value3) + (value1 * value3);
// }

// // ES6
// function calc(value1 = 4, value2 = 5, value3 = 6) {
//   return value1 + (value2 * value3) + (value1 * value3);
// }


const response = calc(4);
// const response = calc(4, , 10);
// const response = calc(4, undefined, 10);

console.log(response);
