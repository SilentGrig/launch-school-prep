function sumOfSquares(array) {
  return array.reduce((acc, next) => acc + (next * next), 0);
}

let numbers = [3, 5, 7];
console.log(sumOfSquares(numbers)); // => 83