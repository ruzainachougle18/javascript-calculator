document.addEventListener('DOMContentLoaded', function() {
    let display = document.getElementById('display');
    let currentNumber = '';
    let operator = '';
    let previousNumber = '';
    let result = '';
  
    function updateDisplay(value) {
        if (value === '.') {
            if (currentNumber.includes('.')) return;
            if (currentNumber === '') currentNumber = '0';
        }
  
        currentNumber += value;
        display.textContent = currentNumber;
    }
  
    function clear() {
        currentNumber = '';
        previousNumber = '';
        operator = '';
        result = '';
        display.textContent = '0';
    }
  
    function calculate() {
        if (operator === 'add') {
            result = parseFloat(previousNumber) + parseFloat(currentNumber);
        } else if (operator === 'subtract') {
            result = parseFloat(previousNumber) - parseFloat(currentNumber);
        } else if (operator === 'multiply') {
            result = parseFloat(previousNumber) * parseFloat(currentNumber);
        } else if (operator === 'divide') {
            result = parseFloat(previousNumber) / parseFloat(currentNumber);
        }
  
        display.textContent = result;
        currentNumber = result.toString();
    }
  
    document.querySelectorAll('.appendNumber').forEach(item => {
        item.addEventListener('click', function() {
            updateDisplay(this.value);
        });
    });
  
    document.querySelectorAll('.appendOperator').forEach(item => {
        item.addEventListener('click', function() {
            if (currentNumber !== '') {
                if (operator !== '') {
                    calculate();
                } else {
                    result = parseFloat(currentNumber);
                    previousNumber = currentNumber;
                    currentNumber = '';
                }
            }
  
            operator = this.value;
        });
    });
  
    document.querySelector('.equalsBtn').addEventListener('click', function() {
        if (currentNumber !== '' && previousNumber !== '') {
            calculate();
            operator = '';
        }
    });
  
    document.querySelector('.clearBtn').addEventListener('click', function() {
        clear();
    });
  
    document.querySelector('.sign').addEventListener('click', function() {
        if (currentNumber !== '') {
            currentNumber = (parseFloat(currentNumber) * -1).toString();
            display.textContent = currentNumber;
        }
    });
  
    document.querySelector('.percent').addEventListener('click', function() {
        if (currentNumber !== '') {
            currentNumber = (parseFloat(currentNumber) / 100).toString();
            display.textContent = currentNumber;
        }
    });
  });
  