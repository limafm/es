function test() {
  this.test = 'test';

  setTimeout(function() {
    console.log(`This is a ${this.test}`);
  });

  // setTimeout(function() {
  //   console.log(`This is a ${this.test}`);
  // }.bind(this));

  // const that = this;
  // setTimeout(function() {
  //   console.log(`This is a ${that.test}`);
  // });

  // setTimeout(() => {
  //   console.log(`This is a ${this.test}`);
  // });
}

test();
