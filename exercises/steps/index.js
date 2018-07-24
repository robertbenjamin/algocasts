// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

const steps = (n, row = 1, stairs = []) => {
  if (n === 0) return;

  for (let i = 1; i <= n - 1; i++) {
    stairs.unshift(' ');
  }

  for (let i = 1; i <= row; i++) {
    stairs.unshift('#');
  }

  console.log(stairs.join(''));
  return steps(n - 1, row + 1);
}

module.exports = steps;

// --- Alternate Solutions

// My first solution
/*const stepString = (stepLength, totalLength) => {
  let step = [];

  for (let i = 0; i < stepLength; i++) {
    step.push('#');
  }
  for (let i = 0; i < totalLength - stepLength; i++) {
    step.push(' ');
  }

  return step.join('');
}

const steps = n => {
  for (let i = 1; i <= n; i++) {
    console.log(stepString(i, n));
  }
}*/

// Given solution
/*const steps = n => {
  for (let row = 0; row < n; row++) {
    let string = '';

    for (let column = 0; column < n; column++) {
      if (column <= row) {
        string += '#';
      } else {
        string += ' ';
      }
    }

    console.log(string);
  }
}*/

// Given recursive solution
/*const steps = (n, row = 0, stair = '') => {
  if (n === row) return;

  if (stair.length === n) {
    console.log(stair);
    return steps(n, row + 1);
  }

  const add = stair.length <= row ? '#' : ' ';
  return steps(n, row, stair + add);
}*/
