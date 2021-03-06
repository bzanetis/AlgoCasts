// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//solution has a problem in that it makes you check every char twice, but uses helper & gives you a prob to talk about
function palindrome(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

//using reverse() array method, better solution than above
// function palindrome(str) {
//     const reversed = str.split("").reverse().join("");
//     return reversed === str;
//   }
module.exports = palindrome;
