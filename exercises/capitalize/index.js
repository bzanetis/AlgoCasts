// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let result = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}
//create 'result' which is the first char of the input str capitalized - means will have to use a for loop this time bc need to start after first char
//for each char in the string
////IF the char to the left is a space,
//////capitalize it & add to result
////ELSE
//////add to result

// function capitalize(str) {
//     const words = [];

//     for (let word of str.split(" ")) {
//       words.push(word[0].toUpperCase() + word.slice(1));
//     }
//     return words.join(" ");
//   }
//make an empty array "words"
////make input str an arr using split
////for each word in the arr
////uppercase 1st letter of the word
////join first letter w/rest of the string
////push result into words arr
//join "words" into a string and return it

module.exports = capitalize;
