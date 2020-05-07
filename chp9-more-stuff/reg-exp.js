function allMatches(words, regExp) {
  return words.filter(word => regExp.test(word));
}

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // ['laboratory', 'flab', 'elaborate']