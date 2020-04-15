/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var findClosest = function(words, word1, word2) {
  let result = words.length - 1;
  let index1;
  let index2;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === word1) {
      index1 = i;
    }
    if (words[i] === word2) {
      index2 = i;
    }

    if (index1 > 0 && index2 > 0) {
      result = Math.min(result, Math.abs(index1 - index2));
    }
  }

  return result;
};
