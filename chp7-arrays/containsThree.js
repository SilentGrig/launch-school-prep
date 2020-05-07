let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function containsThree(array) {
  const threesArray = array.filter(number => number ===3);
  return threesArray.length > 0;
}

console.log(containsThree(numbers1));
console.log(containsThree(numbers2));
console.log(containsThree(numbers3));