/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
  const result = [];
  const patternList = pattern.split('');

  for (let i = 0; i < words.length; i++) {
    const wordList = words[i].split('');
    let obj = {};
    let isItem = 1;
    for (let j = 0; j < wordList.length; j++) {
      if (!obj[patternList[j]]) {
        obj[patternList[j]] = wordList[j];
      } else {
        if (obj[patternList[j]] !== wordList[j]) {
          isItem = 0;
          break;
        }
      }
    }
    const objList = Object.keys(obj);

    for (let j = 0; j < objList.length; j++) {
      for (let k = j + 1; k < objList.length; k++) {
        if (obj[objList[k]] === obj[objList[j]]) {
          isItem = 0;
          break;
        }
      }
    }
    if (isItem) {
      result.push(words[i]);
    }
  }

  return result;
};
