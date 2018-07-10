// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

const reverseInt = n => {
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');

  return Math.sign(n) * parseInt(reversed);
}

module.exports = reverseInt;

// --- Alternate Solutions

// First messy solution
/* const reverseInt = n => {
  n = n.toString().split('');

  let isNegative = false;
  if (n[0] === '-') {
    isNegative = true;
    n.shift();
  }

  n = n.reverse();

  for (let i = 0; i < n.length; i++) {
    if (n[i] === 0) {
      n.shift();
    } else {
      break;
    }
  }

  if (isNegative) {
    n.unshift('-');
  }

  return parseInt(n.join(''));
} */
