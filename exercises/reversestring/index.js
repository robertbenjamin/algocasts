// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

const reverse = str => str.split('').reverse().join('');

module.exports = reverse;

// --- Alternate Solutions

/* const reverse = (str) => {
  str
    .split('')
    .reduce((rev, char) => char + rev);
} */

/* const reverse = (str) => {
  let reversed = '';

  for (let char of str) {
    reversed = char + reversed;
  }

  return reversed;
} */
