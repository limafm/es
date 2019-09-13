// function scope
function sample() {
  const abreu = 'sample 1';

  console.log(abreu);
}

sample();

///////////////////////////////

// // function scope sample 2
// function sample() {
//   const abreu = 'sample 2';
// }

// sample()
// console.log(abreu);

///////////////////////////////

// // block scope
// if (true) {
//   const abreu = 'sample 1';
// }

// console.log(abreu);

///////////////////////////////

// // block scope, sample 2
// if (false) {
//   const abreu = 'sample 2';
// }

// console.log(abreu);

///////////////////////////////

// const abreu = 'sample X';

// // block scope
// if (true) {
//   const abreu = 'sample 1';
// }

// console.log(abreu);

///////////////////////////////

// const abreu = 'sample X';

// // block scope
// if (true) {
//   abreu = 'sample 1';
// }

// console.log(abreu);
