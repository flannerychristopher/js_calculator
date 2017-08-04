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

const equation = document.getElementById('equation');
const solution = document.querySelector('div#solution');
const buttons = document.getElementsByTagName('button');
let equationArray;

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
