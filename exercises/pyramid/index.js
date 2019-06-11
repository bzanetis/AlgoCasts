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

function pyramid(n, row = 0, level = "") {
  if (row === n) {
    return;
  }
  // remember -> max length we can have in a col is determined by 2 * n -1
  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
    //work in this section is done, so return (but not actually returning anything)
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = "#";
  } else {
    add = " ";
  }
  pyramid(n, row, level + add);
}

// function pyramid(n) {
//     const midpoint = Math.floor((2 * n - 1) / 2);
//     for (let r = 0; r < n; r++) {
//       let level = "";
//       for (let column = 0; column < 2 * n - 1; column++) {
//         // get midpoint index of column --> rows will tell us how many #s should be on each side of midpoint
//         // below checks if columns are in between a bracket of acceptable nums
//         if (midpoint - r <= column && midpoint + r >= column) {
//           level += "#";
//         } else {
//           level += " ";
//         }
//       }
//       console.log(level);
//     }
//   }

// from 0 to n (iterate through rows)
/// create an empty string, 'level'
/// from 0 to n * 2 - 1 (columns)
//// if the column should have a "#"
///// add a '#' to level
//else
///// add a space to level
//console.log(level)

module.exports = pyramid;
