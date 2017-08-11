const calc = {
  // sum: 0,
  // difference: 0,
  // product: 1,
  // quotient: 1,
  //
  // reset: () => {
  //   calc.sum = 0;
  //   calc.different = 0;
  //   calc.product = 1;
  //   calc.quotient = 1;
  // },

  run: (array) => {
    // calc.reset();
    calc.multiply(array);
    console.log(array);
  },

  multiply: (array) => {
    for (i = 0; i < array.length; i++) {
      if ( array[i] == 'x' && previous != -1 ) {
        let answer = parseInt(array[i-1]) * parseInt(array[i+1]);
        array.splice( array.indexOf(array[i-1]), 3, answer );
        console.log(array);
        if (array.length) calc.multiply(array);
      }
    }
  },

}
