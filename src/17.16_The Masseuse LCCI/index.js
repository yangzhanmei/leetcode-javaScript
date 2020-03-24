/**
 * @param {number[]} nums
 * @return {number}
 */
var massage = function(nums) {
  let len = nums.length;
  if (len === 0) {
    return 0;
  }
  if (len === 1) {
    return nums[0];
  }
  if (len === 2) {
    return Math.max(...nums);
  }
  let result = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < len; i++) {
    result[i] = Math.max(result[i - 1], result[i - 2] + nums[i]);
  }
  return result[len - 1];
};
