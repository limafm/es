function convertCurrency(amount) {
  const converted = {
    USD: amount * 0.24,
    EUR: amount * 0.22,
  };

  return converted;
}

const { USD, EUR } = convertCurrency(3);

console.log('USD:', USD);
console.log('EUR:', EUR);

/////////////////////////////////////////////////////

// function crazySum({ value1 = 10, value2 = 20 }) {
//   const sum = value1 + value2;
//   console.log(sum);
// }

// crazySum({ value1: 15, value2: 30 });
// crazySum({ value1: 15 });
// crazySum({ value2: 40 });
// crazySum();

