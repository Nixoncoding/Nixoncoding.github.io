function addToDisplay(value) {
    const display = document.getElementById('calc-display');
    if (display.value === '0') {
      display.value = value;
    } else {
      display.value += value;
    }
  }
  
  function clearDisplay() {
    document.getElementById('calc-display').value = '0';
  }
  
  function calculate() {
    const display = document.getElementById('calc-display');
    try {
      display.value = eval(display.value.replace('×', '*').replace('÷', '/'));
    } catch (e) {
      display.value = 'Error';
    }
  }
  