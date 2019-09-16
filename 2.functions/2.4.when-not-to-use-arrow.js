// // 1.When u need a method to bind to an object
// const myObj = {
//   points: 5,
//   score: () => {
//     this.points++;
//   },
// };

// myObj.score();
// console.log(this.points);

// // this.points = 1;
// // myObj.score();
// // myObj.score();
// // myObj.score();
// // console.log(this.points);

// ///////////

// // const myObj = {
// //   points: 5,
// //   score() {
// //     this.points++;
// //   },
// // };

// // myObj.score();
// // console.log(myObj);

///////////////////////////////////////////////////////////////

// // 2. Adding a prototype method
// class Car {
//   constructor(color) {
//     this.color = color;
//   }
// }

// const car1 = new Car('black');

// Car.prototype.print = () => `The car is ${this.color}`;
// // Car.prototype.print = function() {
// //   return `The car is ${this.color}`;
// // };

// console.log(car1.print());

///////////////////////////////////////////////////////////////

// // 3. When u need arguments object
// const printAsArray = function() {
//   const myArray = Array.from(arguments);

//   console.log(myArray);
// }

// const printAsArray = () => {
//   const myArray = Array.from(arguments);

//   console.log(myArray);
// }

// printAsArray('um', 'dois', 'tres');

///////////////////////////////////////////////////////////////
