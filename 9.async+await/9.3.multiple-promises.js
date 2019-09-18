function breathe(amount) {
  return new Promise((resolve, reject) => {
    if (amount > 3000) {
      reject(new Error('Valor muito alto!'));
    }

    setTimeout(() => resolve(`done for ${amount}ms`), amount);
  });
}

Promise
  .all([breathe(100), breathe(200), breathe(250)])
  .then(([r1, r2, r3]) => {
    console.log(r1);
    console.log(r2);
    console.log(r3);
  });

/////////////////////////////////

// async function go() {
//   const res = await Promise.all([breathe(100), breathe(200), breathe(250)]);
//   console.log(res);
// }

// go();

/////////////////////////////////

// async function go() {
//   const [r1, r2, r3] = await Promise.all([breathe(100), breathe(200), breathe(2000)]);
//   console.log(r1);
//   console.log(r2);
//   console.log(r3);
// }

// go();