let calculator = {
  sum: 0,
  difference: 0,
  product: 0,
  quotient: 0,

  reset: () => {
    console.log(this.sum);
    this.sum = 0;
    this.different = 0;
    this.product = 0;
    this.quotient = 0;
  },

  calculate: (array) => {
    calculator.reset;
    // this.multiply(array);
    console.log(this.product);
  },

  multiply: (equation) => {

    for (i = 0; i < equation.length; i++) {
      let previous = equation.indexOf(equation[i-1]);
      let current = equation.indexOf(equation[i]);
      let next = equation.indexOf(equation[i+1]);

      console.log(previous);

      if ( equation[i] == 'x' ) {
        if ( previous !== -1 ) {
          let answer = parseInt(equation[i-1]) * parseInt(equation[i+1]);
          this.product *= answer;
          equation.splice(previous, 3);

          console.log(equation);
          if (equation.length) this.multiply(equation);
        } else if ( previous === -1 ) {
          let answer = parseInt(equation[i+1]);
          this.product *= answer;
          console.log(current);
          equation.splice(current, 2);
          console.log(equation);
          if (equation.length) this.multiply(equation);
        }
      }
    }
  },

}
