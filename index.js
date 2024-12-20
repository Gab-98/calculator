const add = ((num1, num2) => num1 + num2);
const subtract = ((num1, num2) => num1 - num2);
const multiply = ((num1, num2) => num1 * num2);
const divide = ((num1, num2) => num1 / num2);

function operate() {
    let firstNumber = +prompt("First number: ");
    let operator = prompt("Operator: ");
    let secondNumber = +prompt("Second number: ");

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        console.log("Please enter valid numbers.");
        return;
    }

    if (operator === '+') {
        return add(firstNumber, secondNumber);
    } else if (operator === '-') {
        return subtract(firstNumber, secondNumber);
    } else if (operator === '*') {
        return multiply(firstNumber, secondNumber);
    } else if (operator === '/') {
        if (num2 === 0) {
            console.log("Division by zero is not allowed.");
        } else {
            return divide(firstNumber, secondNumber);
        }
    }
    console.log("Invalid operation. Please choose from +, -, *, or /.");
};

let displayContent = "0"; // Variable to store the current display content

function appendToDisplay(value) {
    // Replace "0" with the first input or append if there's already input
    if (displayContent === "0") {
        displayContent = value;
    } else {
        displayContent += value;
    }
    updateDisplay();
}

function updateDisplay() {
    const display = document.querySelector('.display');
    display.textContent = displayContent; // Update the visible display
}

function clearDisplay() {
    displayContent = "0"; // Reset the display content
    updateDisplay();
}