// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, index + size)); //taking a properly sized chunk out of original array by using slice
    index += size; //moving on to next chunk of elems in original array
  }
  return chunked;
}

// function chunk(array, size) {
//     const chunked = [];
//     for (let element of array) {
//       const last = chunked[chunked.length - 1]; //get last elem of new chunked array;

//       if (!last || last.length === size) {
//         chunked.push([element]); //combining steps of creating new chunk within chunked & adding curr elem that we're iterating over to it
//       } else {
//         last.push(element); //else add the current elem into the chunk
//       }
//     }
//     return chunked;
//   }

module.exports = chunk;
