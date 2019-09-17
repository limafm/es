const pessoas = [
  { name: 'Flima', id: '001' },
  { name: 'Flama', id: '002' },
  { name: 'Fluma', id: '003' },
];

const pessoas2 = [
  // { name: 'Flima2', id: '001' },
  { name: 'Flama2', id: '002' },
  { name: 'Fluma2', id: '003' },
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

function changeTo2(pessoa) {
  return new Promise((resolve, reject) => {
    const pessoa2 = pessoas2.find(pessoa2 => pessoa2.id === pessoa.id);

    if (pessoa2) {
      pessoa.name = pessoa2.name;
      resolve(pessoa);
    } else {
      reject(Error('Não existe pessoa correspondente'));
    }

  });
}

getById('001')
  .then((pessoa) => {
    console.log(pessoa);
  })
  .catch((error) => {
    console.log(error);
  });


// getById('001')
//   .then((pessoa) => {
//     return changeTo2(pessoa);
//   })
//   .then((pessoa) => {
//     console.log(pessoa);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
