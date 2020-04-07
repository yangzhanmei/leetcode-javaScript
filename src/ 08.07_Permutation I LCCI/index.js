/**
 * @param {string} S
 * @return {string[]}
 */
var permutation = function(S) {
  const result = [];

  function getStr(str, list) {
    if (list.length === 0) {
      result.push(str);
      return;
    }

    for (let i = 0, len = list.length; i < len; i++) {
      str += list[i];
      getStr(str, list.slice(0, i).concat(list.slice(i + 1)));
      str = str.slice(0, str.length - 1);
    }
  }

  getStr('', S);

  return result;
};
