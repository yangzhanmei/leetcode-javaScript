/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  const list = s.split('');
  let left = 0;
  let right = 0;
  let result = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] === 'L') {
      left++;
    } else {
      right++;
    }

    if (left === right) {
      result += 1;
      left = 0;
      right = 0;
    }
  }

  return result;
};
