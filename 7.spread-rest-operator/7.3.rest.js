function convertCurrency(rate, qty1, qty2, qty3) {
  console.log(rate * qty1);
  console.log(rate * qty2);
  console.log(rate * qty3);
}

// A partir de vários items, gera um iterável.

// // function convertCurrency(rate, ...qty) {
// //   qty.forEach((q) => {
// //     console.log(rate * q);
// //   });
// // }

convertCurrency(1.5, 1, 2, 3);

/////////////////////////////////////
// //with destructuring

// const numbers = [1, 2, 3, 4, 5];

// const [um, dois, ...restante] = numbers;
// console.log(um);
// console.log(dois);
// console.log(restante);
