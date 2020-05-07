function getLargestNumber(list) {
  return list.reduce(
    (largestNumber, current) => (current > largestNumber ? current : largestNumber)
  );
}

console.log(getLargestNumber([1,6,3,2]));
console.log(getLargestNumber([-1,-6,-3,-2]));
console.log(getLargestNumber([2,2]));