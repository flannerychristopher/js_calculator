// this file is code no longer being use in the project

const equation = document.getElementById('equation');
const solution = document.querySelector('div#solution');
const buttons = document.getElementsByTagName('button');
let equationArray;

function multiply(a, b) {
	let answer = parseInt(a) * parseInt(b);
  return answer;
}
function divide(a, b) {
	parseInt(a) / parseInt(b);
	return answer;
}
function add(a, b) {
  let answer = parseInt(a) + parseInt(b);
  return answer;
}
function subtract(a, b) {
  let answer = parseInt(a) - parseInt(b);
  return answer;
}

function reset() { // reset values after a calculation
  sum = 0;
  difference = 0;
  product = 1;
  quotient = 1;
}

function setIndexRef(equation) { // set the index references for loop
  let previous = equation.indexOf(equation[i-1]);
  let current = equation.indexOf(equation[i]);
  let next = equation.indexOf(equation[i+1]);
}


for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  button.addEventListener("click", function() {
    if (button.textContent === 'C/AC' ) {
      equation.value = '';
      return;
    } else {
      if (button.textContent === '=' && equation.textContent.indexOf('+') > -1) {
        equationArray = equation.value.split('+');
        printAnswer( add(equationArray[0], equationArray[1]) );
        return;
      } else if (button.textContent === '=' && equation.textContent.indexOf('-') > -1) {
        equationArray = equation.value.split('-');
        printAnswer( subtract(equationArray[0], equationArray[1]) );
        return;
      } else {
        equation.textContent += button.textContent;
        return;
      }
    }
  });
}

function calculator(equation) {
  for (i = 0; i < equation.length; i++) {

    let previous = equation.indexOf(equation[i-1]);
    let current = equation.indexOf(equation[i]);
    let next = equation.indexOf(equation[i+1]);

    if ( equation[i] === 'x' ) {
      if ( previous === -1 ) {
        product *= parseInt(equation[i+1]);
        equation.splice(current, 2);
        calculate(equation);
      } else {
        let answer = multiply(equation[i-1], equation[i+1]);
        product *= answer;
        equation.splice(previous, 3);
        calculate(equation);
      }

    } else if ( equation[i] === '+' ) {
      if ( previous === -1 ) {
        sum += parseInt(equation[i+1]);
        equation.splice(current, 2);
        calculate(equation);
      } else {
        let answer = add(equation[i-1], equation[i+1]);
        sum += answer;
        equation.splice(previous, 3);
        calculate(equation);
      }

    } else if (equation[i] === '-') {
      if ( previous === -1 ) {
        difference -= parseInt(equation[i+1]);
        equation.splice(current, 2);
        calculate(equation);
      } else {
        let answer = subtract(equation[i-1], equation[i+1]);
        difference += answer;
        equation.splice(previous, 3);
        calculate(equation);
      }
    }
  }
  let solution = (product / quotient) + sum + difference;
  return solution;
}
