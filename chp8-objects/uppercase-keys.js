let obj = {
  b: 2,
  a: 1,
  c: 3,
};

const uppercaseKeys = Object.keys(obj).map(key => key.toUpperCase());
console.log(uppercaseKeys);
console.log(obj);