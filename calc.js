const statusImage = document.getElementById("status-image");

const waitingImage = "yes-please-sir-waiting.gif";
const resultImage = "Hello Cute Sticker - Hello Cute - Discover & Share GIFs.gif";

const commentary = document.getElementById("comentary");
const waitingMessage = "What should we do?";
const resultMessage = "Nice one!";

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
  statusImage.src = resultImage;
  commentary.innerText = resultMessage;
}

// Equals button
document.getElementById("equals").addEventListener("click", calculate);

// Clear button
document.getElementById("clearButton").addEventListener("click", function () {
  displayResult(0);
  statusImage.src = waitingImage;
  commentary.innerText = waitingMessage;
});





