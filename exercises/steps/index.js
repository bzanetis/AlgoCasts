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

// added in arg of row, defaulted to val of 0 in order to start on top row
// stair also needs to be shared between func calls, so adding that w/initial default val of empty
function steps(n, row = 0, stair = "") {
  if (n === row) {
    return;
  }
  if (n === stair.length) {
    console.log(stair);
    steps(n, row + 1);
    //work in this section is done, so return (but not actually returning anything)
    return;
  }
  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }
  // not changing the val of row here bc we're still working on same row)
  steps(n, row, stair);
}
// RECURSIVE solution
// if row === n, then we've hit our base case
// if the stair string has a length === row, then we're at end of row (increment row at end of row)
// if the length of stair str is <= row number we're working on, we add a '#', otherwise add a ' '

// function steps(n) {
//     for (let r = 0; r < n; r++) {
//       let stair = "";

//       for (let c = 0; c < n; c++) {
//         if (c <= r) {
//           stair += "#";
//         } else {
//           stair += " ";
//         }
//       }
//       console.log(stair);
//     }
//   }

// from 0 to n (iterate through rows)
//// create an empty string stair "" (for each row, so, within row loop)
//// from 0 to n (iterate thru columns)
///// if the current column is =< the current row
/////// add a '#' to stair
//else
////// add a space to stair
// console.log stair

module.exports = steps;
