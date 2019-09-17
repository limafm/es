const pessoas = [
  { name: 'Flima', id: '001' },
  { name: 'Flama', id: '002' },
  { name: 'Fluma', id: '003' },
];

function getById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pessoa = pessoas.find(pessoa => pessoa.id === id);

      if (pessoa) {
        resolve(pessoa);
      } else {
        reject(Error('Pessoa não encontrada'));
      }
    }, 500);
  });
}

function getById2(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pessoa = pessoas.find(pessoa => pessoa.id === id);

      if (pessoa) {
        resolve(pessoa);
      } else {
        reject(Error('Pessoa não encontrada'));
      }
    }, 3000);
  });
}

Promise
  .all([getById('001'), getById('002'), getById('003')])
  .then((response) => {
    console.log(response);
  });
  // .then(([res001, res002, res003]) => {
  //   console.log(res001, res002, res003);
  // });

/////////////////////////////////////////////

// Promise
//   .all([getById('001'), getById('002'), getById2('003')])
//   .then((response) => {
//     console.log(response);
//   });

/////////////////////////////////////////////

// Promise
//   .all([getById('001'), getById('002'), getById2('005')])
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
