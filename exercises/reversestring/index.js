// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//solution using advanced array helper
//could remove 2nd return statement & curly braces in order to show ES6 knowledge
function reverse(str) {
  return str.split("").reduce((reversed, char) => {
    return char + reversed;
  }, "");
}

//easiest - but may not be able to use reverse()
// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// solution with for (new) for loop
// function reverse(str) {
//     let reversed = "";
//     for (let char of str) {
//       reversed = char + reversed;
//     }
//     return reversed;
//   }

module.exports = reverse;
