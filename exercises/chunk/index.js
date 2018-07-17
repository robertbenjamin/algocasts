// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

const chunk = (array, size) => {
  const chunked = [];

  for (let i = 0; i < array.length; i += size) {
    chunked.push(array.slice(i, size + i));
  }

  return chunked;
}

module.exports = chunk;

// --- Alternate Solutions

// First given solution
/*const chunk = (array, size) => {
  const chunked = [];

  for (let element of array) {
    const last = chunked[chunked.length - 1];

    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }

  return chunked;
}*/

// Another solution using splice
/*const chunk = (array, size) => {
  const arrLength = array.length;
  const iterations = Math.round(arrLength / size);
  const chunkedArr = [];

  for (let i = 1; i <= iterations; i++) {
    chunkedArr.push(array.splice(0, size));
  }

  return chunkedArr;
}*/
