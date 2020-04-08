/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const result = [];
  const resultItem = {};

  for (let i = 0; i < strs.length; i++) {
    const item = strs[i]
      .split('')
      .sort()
      .join('');
    if (!resultItem[item]) {
      resultItem[item] = [strs[i]];
    } else {
      resultItem[item].push(strs[i]);
    }
  }

  Object.keys(resultItem).forEach(item => {
    result.push(resultItem[item]);
  });

  return result;
};
