function factorial(number) {
  fact = 1;
  for(let i = 2; i <= number; i++) {
    fact *= i;
  }
  return fact
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