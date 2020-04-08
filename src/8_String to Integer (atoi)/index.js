/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  const result = parseInt(str, 10);

  if (isNaN(result)) {
    return 0;
  }
  if (result > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1;
  }
  if (result < -Math.pow(2, 31)) {
    return -Math.pow(2, 31);
  }
  return result;
};
