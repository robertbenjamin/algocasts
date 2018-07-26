// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

const pyramid = n => {
  for (let row = 1; row <= n; row++) {
    let level = '';

    const spaces = n - row;
    const hashes = row * 2 - 1;

    for (let count = 1; count <= spaces; count++) level += ' ';
    for (let count = 1; count <= hashes; count++) level += '#';
    for (let count = 1; count <= spaces; count++) level += ' ';

    console.log(level);
  }
}

module.exports = pyramid;

// --- Alternate Solutions

// My second solution
/*const pyramid = n => {
  const width = n * 2 - 1;
  const mid = Math.floor(width / 2);

  for (let row = 0; row < n; row++) {
    let level = '';

    for (let column = 0; column < width; column++) {
      const before = column < mid - row;
      const after = column > mid + row;
      level += (before || after) ? ' ' : '#';
    }

    console.log(level);
  }
}*/

// My recursive solution
/*const pyramid = (n, row = 0, level = '') => {
  if (n === row) return;

  const width = n * 2 - 1;
  const mid = Math.floor(width / 2);

  if (level.length === width) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const index = level.length;
  const before = index < mid - row;
  const after = index > mid + row;
  level += (before || after) ? ' ' : '#';
  return pyramid(n, row, level);
}*/
