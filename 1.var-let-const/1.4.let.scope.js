// function scope
function sample() {
  let abreu = 'sample 1';

  console.log(abreu);
}

sample();

///////////////////////////////

// // function scope sample 2
// function sample() {
//   let abreu = 'sample 2';
// }

// sample()
// console.log(abreu);

///////////////////////////////

// // block scope
// if (true) {
//   let abreu = 'sample 1';
// }

// console.log(abreu);

///////////////////////////////

// // block scope, sample 2
// if (false) {
//   let abreu = 'sample 2';
// }

// console.log(abreu);

///////////////////////////////

// let abreu = 'sample X';

// // block scope
// if (true) {
//   let abreu = 'sample 1';
// }

// console.log(abreu);

///////////////////////////////

// let abreu = 'sample X';

// // block scope
// if (true) {
//   abreu = 'sample 1';
// }

// console.log(abreu);
