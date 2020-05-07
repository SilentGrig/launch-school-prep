function factorial(number, acc = 1) {
  if (number === 0) {
    return acc;
  }
  return factorial(number - 1, acc * number)
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));
console.log(factorial(8));