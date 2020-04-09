/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
  const sList = s.split('');
  const tList = t.split('');
  const obj = {};
  let result = 0;

  for (let i = 0; i < sList.length; i++) {
    if (!obj[sList[i]]) {
      obj[sList[i]] = 1;
    } else {
      obj[sList[i]] += 1;
    }
  }

  for (let i = 0; i < tList.length; i++) {
    if (obj[tList[i]]) {
      obj[tList[i]] -= 1;
    }
  }

  Object.keys(obj).forEach(item => {
    result += obj[item];
  });

  return result;
};
