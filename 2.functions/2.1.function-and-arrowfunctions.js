const myArray = [32, 45, 100, 2, 200, 70];

const response = myArray.map(function(number) {
  return number + 10;
});

// const response = myArray.map((number) => {
//   return number + 10;
// });

// // implicit return
// const response = myArray.map(number => number + 10);

// const response = myArray.map((number) => ({
//   number,
// }));

console.log(response);
