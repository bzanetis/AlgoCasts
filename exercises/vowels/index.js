// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  // match regex checks if anything in between [] is contained in str
  // g makes sure we don't stop at first match we find (ie "feet" would need to count 2 es)
  // i stands for insensitive, so takes care of upper case
  // must return bc otherwise "str.match()" would return an array of all matches, or if no matches would return null
  const matches = str.match(/[aeiou]/gi);
  // if matches is truthy return length of array, if falsey (null) return 0
  return matches ? matches.length : 0;
}

// function vowels(str) {
//     let count = 0;
//     // create helper array that we can run includes on (rather than a long || series)
//     const checker = ["a", "e", "i", "o", "u"];
//     for (let char of str.toLowerCase()) {
//       if (checker.includes(char)) {
//         count++;
//       }
//     }
//     return count;
//   }

module.exports = vowels;
