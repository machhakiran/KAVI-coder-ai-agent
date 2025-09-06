let currentValue = '';
let operand1 = null;
let operand2 = null; 
let operator = null;

const digits = document.querySelectorAll('.digit');
const operations = document.querySelectorAll('.operation');
const equals = document.querySelector('.equals');
const decimal = document.querySelector('.decimal');
const clear = document.querySelector('.clear');
const display = document.querySelector('.result');

digits.forEach(button => {
  button.addEventListener('click', () => {
    handleDigit(button.value);
    updateDisplay();
  })
});

operations.forEach(button => {
  button.addEventListener('click', () => {
    handleOperation(button.value);
  })
});

equals.addEventListener('click', () => {
  handleEquals();
  updateDisplay();
});

decimal.addEventListener('click', () => {
  addDecimal();
  updateDisplay();
});

clear.addEventListener('click', () => {
  clearCalculator();
  updateDisplay();
});

function handleDigit(digit) {
  if (operator === null) {
    currentValue += digit;
  } else {
    operand2 = operand2 === null ? digit : operand2 + digit;
  }
}

function handleOperation(op) {
  if (operator !== null) {
    operate();
  }
  operand1 = currentValue;
  operator = op;
  currentValue = '';
}

function handleEquals() {
  if (operator === null || operand2 === null) {
    return;
  }
  operate();
  operator = null;
  operand2 = null;
}

function addDecimal() {
  if (!currentValue.includes('.')) {
    currentValue += '.';
  }
}

function clearCalculator() {
  currentValue = '';
  operand1 = null;
  operand2 = null;
  operator = null;
}

function operate() {
  const a = parseFloat(operand1);
  const b = parseFloat(operand2);
  switch (operator) {
    case '+':
      currentValue = a + b;
      break;
    case '-':
      currentValue = a - b;
      break;
    case '*':
      currentValue = a * b;
      break;
    case '/':
      currentValue = a / b;
      break;
  }
}

function updateDisplay() {
  display.textContent = currentValue;
}