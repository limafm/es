const promise1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('foo');
    // reject('Error!!!');
  }, 1000);
});

promise1
  .then((value) => {
    console.log(value);
  });
  // .catch((err) => {
  //   console.error(err);
  // });

console.log('bar');
