/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  let result = [];
  for (let i = 0; i <= num; i++) {
    const count = i
      .toString(2)
      .split('')
      .filter(item => item === '1').length;
    result.push(count);
  }

  return result;
};
