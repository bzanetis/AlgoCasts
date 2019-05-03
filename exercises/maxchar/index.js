// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let greatest = "";
  let max = 0;

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1; //alt clean way using ternary instead of ifs
    //     if (charMap[char]) {
    //       charMap[char]++;
    //     } else {
    //       charMap[char] = 1;
    //     }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      greatest = char;
    }
  }
  return greatest;
}

module.exports = maxChar;
