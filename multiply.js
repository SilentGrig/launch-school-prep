const multiply = (a, b) => a * b;

function getNumber(question) {
  const rlSync = require('readline-sync');
  return Number(rlSync.question(question))
}

const firstNumber = getNumber('Enter the first number: ');
const secondNumber = getNumber('Enter the second number: ');
console.log(`${firstNumber} * ${secondNumber} = ${multiply(firstNumber, secondNumber)}`);
