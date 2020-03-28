/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    result[i] = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        result[i] += 1;
      }
    }
  }

  return result;
};
