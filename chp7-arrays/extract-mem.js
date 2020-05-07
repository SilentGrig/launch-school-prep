function extractMem(array) {
  return array.reduce((mem, next) => {
    return mem.concat(next.filter(word => word === "mem"));
  }, [])[0];
}

let arr = [["test", "hello", "world"], ["example", 6, "mem", null], [4, 8, 12]];

console.log(extractMem(arr));