function oddLengths(array) {
  return array.reduce((acc, next) => {
    const length = next.length;
    if (length % 2 == 1) {
      acc.push(length);
    }
    return acc;
  }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]