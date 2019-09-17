const sampleArray = [
  { code: '1234', msg: 'hi 1' },
  { code: '234', msg: 'hi 2' },
  { code: '34', msg: 'hi 3' },
  { code: '3412', msg: 'hi 4' },
];

const mySample = sampleArray.find((sample) => sample.code === '234');
console.log(mySample);

// const mySampleIndex = sampleArray.findIndex((sample) => sample.code === '234');
// console.log(mySampleIndex);

