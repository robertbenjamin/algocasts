// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// First solution
const maxChar = str => {
  let chars = {};

  str.split('').forEach(char => {
    const keyExists = chars.hasOwnProperty(char);
    chars[char] = keyExists ? chars[char] += 1 : 1;
  });

  const charCount = Object.values(chars);
  const maxRepeats = Math.max(...charCount);
  const maxChar = Object.keys(chars).find(key => chars[key] == maxRepeats);

  return maxChar.toString();
}

module.exports = maxChar;

// --- Alternate Solutions

/* const maxChar = str => {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
} */
