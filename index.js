const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num2 === 0 ? "Can't divide by 0" : num1 / num2;
// Variables to store calculator state
let firstNumber = null;
let secondNumber = null;
let currentOperator = null;
let resetDisplay = false;
// Updates the display content
let displayContent = "0";

function updateDisplay() {
    const display = document.querySelector('.display');
    display.textContent = displayContent;
};
// Appends numbers or operators to the display
function appendToDisplay(input) {
    if (resetDisplay) {
        displayContent = "";
        resetDisplay = false;
    }
    if (displayContent === "0" && !isNaN(input)) {
        displayContent = input;// Replace initial zero with first input
    } else {
        displayContent += input;
    }
    updateDisplay();
}
// Clears the display and resets variables
function clearDisplay() {
    displayContent = "0";
    firstNumber = null;
    secondNumber = null;
    currentOperator = null;
    resetDisplay = false;
    updateDisplay();
}
// Handles operator button clicks
function setOperator(operator) {
    if (currentOperator !== null) {
        operate();
    }
    firstNumber = parseFloat(displayContent);
    currentOperator = operator;
    resetDisplay = true;
}
// Performs the calculation
function operate() {
    if (currentOperator === null || resetDisplay) return;

    secondNumber = parseFloat(displayContent);

    let result;
    switch (currentOperator) {
        case "+":
            result = add(firstNumber, secondNumber);
            break;
        case "-":
            result = subtract(firstNumber, secondNumber);
            break;
        case "*":
            result = multiply(firstNumber, secondNumber);
            break;
        case "/":
            result = divide(firstNumber, secondNumber);
            break;
        default:
            return;
    }

    displayContent = result.toString();
    firstNumber = result;
    currentOperator = null;
    resetDisplay = true;
    updateDisplay();
};