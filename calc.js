
document.getElementById("equals").addEventListener("click", function () {
  const num1 = parseInt(document.getElementById("1number").value);
  const operator = document.getElementById("operator").value;
  const num2 = parseInt(document.getElementById("2number").value);

  let result;
  function additionFunction(a, b) {
    return a + b;
  }

  //subtraction
  function minusFunction(a, b) {
    return a - b;
  }

  //division
  function divideFunction(a, b) {
    return a / b;
  }

  //multiply
  function multiplyFunction(a, b) {
    return a * b;
  }

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
  //display result
  document.getElementById("result").innerText = result;
});

//Clear button
document.getElementById("clearButton").addEventListener("click", function () {
  document.getElementById("result").innerText = 0;
});

