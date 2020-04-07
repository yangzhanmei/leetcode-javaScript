/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const result = [];
  let listStr = '';
  function getStr(str, left, right) {
    if (left === 0 && right === 0) {
      result.push(str);
      return;
    }

    if (left > 0) {
      getStr(`${str}(`, left - 1, right);
    }

    if (right > left) {
      getStr(`${str})`, left, right - 1);
    }
  }

  getStr(listStr, n, n);

  return result;
};
