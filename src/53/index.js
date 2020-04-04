/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let result;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      result = i;
      break;
    }
  }

  return result || result === 0 ? result : nums.length;
};
