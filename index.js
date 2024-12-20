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