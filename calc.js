// Get the values from the dropdowns
function getValues() {
  const num1 = parseInt(document.getElementById("1number").value);
  const operator = document.getElementById("operator").value;
  const num2 = parseInt(document.getElementById("2number").value);
  return { num1, operator, num2 };
}

// Display Result
function displayResult(result) {
  document.getElementById("result").innerText = result;
}

// Addition
function additionFunction(a, b) {
  return a + b;
}

// Subtraction
function minusFunction(a, b) {
  return a - b;
}

// Division
function divideFunction(a, b) {
  return a / b;
}

// Multiplication
function multiplyFunction(a, b) {
  return a * b;
}

// Perform the calculation
function calculate() {
  const { num1, operator, num2 } = getValues();
  let result;

  switch (operator) {
    case "+":
      result = additionFunction(num1, num2);
      break;
    case "-":
      result = minusFunction(num1, num2);
      break;
    case "*":
      result = multiplyFunction(num1, num2);
      break;
    case "/":
      result = divideFunction(num1, num2);
      break;
  }

  displayResult(result);
}

// Equals button
document.getElementById("equals").addEventListener("click", calculate);

// Clear button
document.getElementById("clearButton").addEventListener("click", function () {
  displayResult(0);
});
