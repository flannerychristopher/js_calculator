const calc = {
  run: (array) => {
    calc.multiply(array);
    calc.divide(array);
    calc.add(array);
    calc.subtract(array);
    console.log(array);
    return array;
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

} // close calc obj


const equationElement = document.getElementById('equation');
const solutionElement = document.querySelector('div#solution');
const buttons = document.getElementsByTagName('button');

(() => {
  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];


    button.addEventListener("click", function() {
      if (button.textContent === 'C/AC' ) {
        equationElement.textContent = '';
        return;
      } else if (button.textContent === '=') {
        console.log(equationElement.textContent);
        let array = equationElement.textContent.split(' ');
        console.log(array);
        let solution = calc.run(array);
        solutionElement.textContent = solution[0];
        return;
      } else {
        equationElement.textContent += button.textContent;
        return;
      }
    });
  }
})();
