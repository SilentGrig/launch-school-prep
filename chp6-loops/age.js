const rlSync = require('readline-sync');

const AGE = Number(rlSync.question('How old are you? '));

console.log(`You are ${AGE} years old.`);
for(let i = 10; i <= 40; i += 10) {
  console.log(`In ${i} years, you will be ${AGE + i} years old.`);
}