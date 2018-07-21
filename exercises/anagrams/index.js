// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const anagrams = (stringA, stringB) => {
  const cleanString = string => string
    .replace(/[^0-9a-z]/gi, '')
    .toLowerCase();

  const buildCharMap = string => {
    const charMap = {};
    string.split('').forEach(char => {
      charMap[char] = charMap[char] + 1 || 1;
    });
    return charMap;
  }

  const cleanStringA = cleanString(stringA);
  const cleanStringB = cleanString(stringB);
  const charMapA = buildCharMap(cleanStringA);
  const charMapB = buildCharMap(cleanStringB);

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
    return false;
  }

  for (let key in charMapA) {
    if (charMapA[key] !== charMapB[key]) return false;
  }

  return true;
}

module.exports = anagrams;

// --- Alternate Solutions

// My version of solution from course
/*const anagrams = (stringA, stringB) => {
  const sortedString = string => {
    return string
      .toLowerCase()
      .replace(/\W/g, '')
      .split('')
      .sort()
      .join();
  }

  return sortedString(stringA) === sortedString(stringB);
}*/
