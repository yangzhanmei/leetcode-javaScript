/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  let result = 0;
  nums.forEach(item => {
    if (item.toString().length % 2 === 0) {
      result += 1;
    }
  });

  return result;
};
