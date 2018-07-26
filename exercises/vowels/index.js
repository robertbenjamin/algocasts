// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

const vowels = str => {
  const vowelChars = ['a', 'e', 'i', 'o', 'u'];

  return str
    .toLowerCase()
    .split('')
    .filter(char => vowelChars.includes(char))
    .length;
}

module.exports = vowels;

// Alternate Solutions

// Regex solution
/*const vowels = str => {
  const matches = str.match(/[aeiou]/ig);
  return matches ? matches.length : 0;
}*/
