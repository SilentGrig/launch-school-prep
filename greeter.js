const  rlSync = require('readline-sync');

function getInput(question) {
  return rlSync.question(question);
}

const firstName = getInput('What is your first name? ');
const lastName = getInput('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`);