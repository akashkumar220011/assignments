/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const shStr1 = str1.split("").sort().join("");
  const shStr2 = str2.split("").sort().join("");
  return shStr1 === shStr2;
}

module.exports = isAnagram;
