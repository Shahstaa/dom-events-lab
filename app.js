/*-------------------------------- Constants --------------------------------*/
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');
/*-------------------------------- Variables --------------------------------*/
let currentInput = '';
let previousInput = '';
let operation = '';
/*------------------------ Cached Element References ------------------------*/

  
/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener('click', (event) => {
    if (event.target.classList.contains('number')) {
      handleNumber(event.target.innerText);
    } else if (event.target.classList.contains('operator')) {
      handleOperator(event.target.innerText);
    } else if (event.target.classList.contains('equals')) {
      calculate();
    } else if (event.target.innerText === 'C') {
      clear();
    }
  });
/*-------------------------------- Functions --------------------------------*/
function handleNumber(number) {
    currentInput += number;
    display.innerText = currentInput;
  }
  function handleOperator(op) {
    if (currentInput === '') return; // Prevents operations with no input
    if (previousInput !== '') {
      calculate(); // Calculate if there's a previous input
    }
    operation = op;
    previousInput = currentInput;
    currentInput = '';
  }
  function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    
    if (isNaN(prev) || isNaN(current)) return; // Guard clause
    
    switch (operation) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '/':
        result = prev / current;
        break;
      default:
        return; // Exit if no operation
    }
    
    currentInput = result.toString(); // Convert result to string
    operation = ''; // Reset operation
    previousInput = ''; // Reset previous input
    display.innerText = currentInput; // Show result
  }
  function clear() {
    currentInput = '';
    previousInput = '';
    operation = '';
    display.innerText = '0'; // Display zero
  }
  
  