// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

const fizzBuzz = n => {
  for (let i = 1; i <= n; i++) {
    let char = '';
    if (i % 3 === 0) char += 'fizz';
    if (i % 5 === 0) char += 'buzz';
    console.log(char || i);
  }
}

module.exports = fizzBuzz;

// --- Alternate Solutions

// More traditional solution
/*const fizzBuzz = n => {
  for (let i = 1; i <= n; i++) {
    const divisibleByThree = i % 3 === 0;
    const divisibleByFive = i % 5 === 0;
    if (divisibleByThree && divisibleByFive) {
      console.log('fizzbuzz');
    } else if (divisibleByThree) {
      console.log('fizz');
    } else if (divisibleByFive) {
      console.log('buzz');
    } else {
      console.log(i)
    }
  }
}*/
