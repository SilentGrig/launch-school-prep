function evenOrOdd(number) {
  convertedNumber = Number(number);
  if (Number.isNaN(convertedNumber)) {
    console.log(`${convertedNumber} is not a number`)
    return;
  }
  if (convertedNumber % 1 !== 0) {
    console.log(`${convertedNumber} is not an integer`);
    return;
  }
  return convertedNumber % 2 === 0 ? 'even' : 'odd';
}

console.log(evenOrOdd('a'));
console.log(evenOrOdd(3.14));
console.log(evenOrOdd(6));
console.log(evenOrOdd(5));