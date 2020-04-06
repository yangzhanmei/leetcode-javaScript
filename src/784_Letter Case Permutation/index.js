/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
  const sList = S.split('');
  let result = [];
  let listStr = '';

  function getString(str, i) {
    if (i >= sList.length) {
      result.push(str);
      return;
    }

    if (i < sList.length) {
      if (/^[0-9]$/.test(sList[i])) {
        getString(str + sList[i], i + 1);
      } else {
        let upperStr = str + sList[i].toLocaleUpperCase();
        let lowerStr = str + sList[i].toLocaleLowerCase();

        getString(upperStr, i + 1);
        getString(lowerStr, i + 1);
      }
    }
  }

  getString(listStr, 0);

  return result;
};
