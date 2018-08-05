// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

const fib = (n, i = 0, curr = 0, next = 1) => {
  if (i === n) return curr;
  return fib(n, ++i, next, next + curr);
}

module.exports = fib;

// --- Alternate Solutions

/*const fib = n => {
  let curr = 0;
  let oldCurr;
  let next = 1;

  for (let i = 0; i < n; i++) {
    oldCurr = curr;
    curr = next;
    next = oldCurr + next;
  }

  return curr;
}*/

// Given solution
/*const fib = n => {
  const result = [0, 1];

  for (let i = 2; i <= n; i++) {
    const a = result[i - 1];
    const b = result[i - 2];

    result.push(a + b);
  }

  return result[n];
}*/

// Given recursive solution
/*const fib = n => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}*/

// Given memoized recursive solution
/*const memoize = fn => {
  const cache = {};

  return (...args) => {
    if (cache[args]) return cache[args];
    return cache[args] = fn(...args);
  }
}

let fib = n => {
  if (n < 2) return n;
  return fib(n - 2) + fib (n - 1);
}

fib = memoize(fib);*/
