function breathe(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`done for ${amount}ms`), amount);
  });
}

breathe(1000)
  .then((res) => {
    console.log(res);
  });

////////////////////////////////////////

// breathe(1000)
//   .then((res) => {
//     console.log(res);
//     return breathe(5000);
//   })
//   .then((res) => {
//     console.log(res);
//   });

///////////////////////////////
// async function run() {
//   let value = await breathe(1000);
//   console.log(value);

//   console.log(await breathe(2000));
//   console.log(await breathe(3000));
//   console.log(await breathe(4000));
//   console.log(await breathe(5000));
// }

// run();