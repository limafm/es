function breathe(amount) {
  return new Promise((resolve, reject) => {
    if (amount > 300) {
      reject(new Error('Valor muito alto!'));
    }

    setTimeout(() => resolve(`done for ${amount}ms`), amount);
  });
}

async function run() {
  let value = await breathe(100);
  console.log(value);

  console.log(await breathe(200));
  console.log(await breathe(30));
  console.log(await breathe(4000));
  console.log(await breathe(50));
}

run();

//////////////////////////////////////

// async function run() {
//   try {
//     let value = await breathe(100);
//     console.log(value);

//     console.log(await breathe(200));
//     console.log(await breathe(30));
//     console.log(await breathe(4000));
//   } catch(err) {
//     console.error(err);
//   }

//   console.log(await breathe(50));
// }

// run();