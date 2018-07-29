// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//      [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//      [8, 9, 4],
//      [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//      [12, 13, 14, 5],
//      [11, 16, 15, 6],
//      [10,  9,  8, 7]]

// n = length of each child array
// n * n = largest number
//

const matrix = n => {
  let counter = 1;
  let xMin = 0;
  let xMax = n - 1;
  let yMin = 0;
  let yMax = n - 1;

  let matrix = [];

  for (let i = 0; i < n; i++) {
    matrix.push([]);
  }

  while (counter <= n * n) {
    for (let x = xMin, y = yMin; x <= xMax; x++) {
      if (x === xMax) {
        for (let y = yMin; y <= yMax; y++) {
          matrix[y][x] = counter;
          counter++;
        }
        xMax--;
      } else {
        matrix[y][x] = counter;
        counter++;
      }
    }

    yMin++;

    for (let x = xMax, y = yMax; x >= xMin; x--) {
      if (x === xMin) {
        for (let y = yMax; y >= yMin; y--) {
          matrix[y][x] = counter;
          counter ++;
        }
        xMin++;
      } else {
        matrix[y][x] = counter;
        counter++;
      }
    }

    yMax--;
  }

  return matrix;
}

module.exports = matrix;
