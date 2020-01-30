/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let result = [[]];
  for (let i = 0; i < nums.length; i++) {
    result.forEach(j => {
      result.push(j.concat(nums[i]));
    });
  }
  return result;
};
