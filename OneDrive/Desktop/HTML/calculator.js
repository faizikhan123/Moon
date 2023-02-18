// Get references to the HTML elements
const input = document.getElementById("input");

// Append a number or decimal to the input
function appendNumber(num) {
  input.value += num;
}

// Append an operator to the input
function appendOperator(op) {
  input.value += op;
}

// Clear the input
function clearInput() {
  input.value = "";
}

// Calculate the result
function calculate() {
  // Evaluate the input expression
  const result = eval(input.value);

  // Display the result in the input field
  input.value = result;
}
