

















































let expression = '';

function updateDisplay() {
  document.getElementById('expression').textContent = expression || '0';
}

function appendNumber(num) {
  expression += num;
  updateDisplay();
}

function appendOperator(operator) {
  if (expression && !isNaN(expression.slice(-1))) {
    expression += operator;
  }
  updateDisplay();
}

function appendDot() {
  let parts = expression.split(/[\+\-\*\/]/);
  let last = parts[parts.length - 1];
  if (!last.includes('.')) {
    expression += '.';
    updateDisplay();
  }
}

function clearDisplay() {
  expression = '';
  updateDisplay();
}

function invert() {
  try {
    if (expression) {
      let result = eval(expression);
      expression = String(result * -1);
      updateDisplay();
    }
  } catch {
    expression = 'Error';
    updateDisplay();
  }
}

function calculate() {
  try {
    expression = String(eval(expression));
  } catch {
    expression = 'Error';
  }
  updateDisplay();
}

updateDisplay();
