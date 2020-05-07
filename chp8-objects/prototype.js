let myProtoObj = {
  foo: 1,
  bar: 2,
};

const myObj = Object.create(myProtoObj);

myObj.qux = 3;

Object.keys(myObj).forEach(function (key) {
  console.log(key);
});

for (let key in myObj) {
  console.log(key);
}