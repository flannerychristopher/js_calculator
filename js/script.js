const equationElement = document.getElementById('equation');
const solutionElement = document.getElementById('solution');
const padElement = document.getElementById('pad');

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
        if ( array.length > 1 ) calc.multiply(array);
      }
    }
  },

  divide: (array) => {
    for ( let i = 0; i < array.length; i++ ) {
      if ( array[i] === '/' ) {
        let answer = parseInt(array[i-1]) / parseInt(array[i+1]);
        array.splice( array.indexOf( array[i-1]), 3, answer );
        console.log(array);
        if ( array.length > 1 ) calc.divide(array);
      }
    }
  },

  add: (array) => {
    for ( let i = 0; i < array.length; i++ ) {
      if (array[i] === '+' ) {
        let answer = parseInt(array[i-1]) + parseInt(array[i+1]);
        array.splice( array.indexOf( array[i-1]), 3, answer );
        console.log(array);
        if ( array.length > 1 ) calc.add(array);
      }
    }
  },

  subtract: (array) => {
    for (let i = 0; i < array.length; i++ ) {
      if (array[i] === '-') {
        let answer = parseInt(array[i-1] - parseInt(array[i+1]));
        array.splice( array.indexOf( array[i-1]), 3, answer );
        console.log(array);
        if ( array.length > 1 ) calc.subtract(array);
      }
    }
  }

}; // close calc obj

(() => { // click handler
  padElement.addEventListener('click', (e) => {
    let x = e.target;
    if (x.textContent === 'C/AC' ) {
      equationElement.textContent = '';
      return;
    } else if (x.textContent === '=') {
      console.log(equationElement.textContent);
      let array = equationElement.textContent.split(' ');
      console.log(array);
      let solution = calc.run(array);
      solutionElement.textContent = solution[0];
      equationElement.textContent = '';
      return;
    } else {
      equationElement.textContent += x.textContent;
      return;
    }
  }, false);
})();
