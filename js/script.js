const calc = {
  run: (array) => {
    calc.multiply(array);
    calc.divide(array);
    calc.add(array);
    calc.subtract(array);
    console.log(array);
  },

  multiply: (array) => {
    for ( let i = 0; i < array.length; i++ ) {
      if ( array[i] === 'x') {
        let answer = parseInt(array[i-1]) * parseInt(array[i+1]);
        array.splice( array.indexOf(array[i-1]), 3, answer );
        console.log(array);
        if ( array.length ) calc.multiply(array);
      }
    }
  },

  divide: (array) => {
    for ( let i = 0; i < array.length; i++ ) {
      if ( array[i] === '/' ) {
        let answer = parseInt(array[i-1]) / parseInt(array[i+1]);
        array.splice( array.indexOf( array[i-1]), 3, answer );
        console.log(array);
        if ( array.length ) calc.divide(array);
      }
    }
  },

  add: (array) => {
    for ( let i = 0; i < array.length; i++ ) {
      if (array[i] === '+' ) {
        let answer = parseInt(array[i-1]) + parseInt(array[i+1]);
        array.splice( array.indexOf( array[i-1]), 3, answer );
        console.log(array);
        if ( array.length ) calc.add(array);
      }
    }
  },

  subtract: (array) => {
    for (let i = 0; i < array.length; i++ ) {
      if (array[i] === '-') {
        let answer = parseInt(array[i-1] - parseInt(array[i+1]));
        array.splice( array.indexOf( array[i-1]), 3, answer );
        console.log(array);
        if ( array.length ) calc.subtract(array);
      }
    }
  }

}
