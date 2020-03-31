/**
 * @param {number[]} nums
 * @return {number[]}
 */

// var sortArray = function(nums) {
//   return nums.sort((a, b) => a - b);
// };

var sortArray = function(nums) {
  let left = 0;
  let right = nums.length - 1;

  return quickSort(nums, left, right);
};

function quickSort(nums, left, right) {
  let i = left;
  let j = right;
  let num = nums[i];
  if (i < j) {
    while (i < j) {
      while (nums[j] >= num && i < j) {
        j--;
      }
      nums[i] = nums[j];
      while (nums[i] <= num && i < j) {
        i++;
      }
      nums[j] = nums[i];
    }
    nums[i] = num;
    quickSort(nums, left, i - 1);
    quickSort(nums, i + 1, right);
  }

  return nums;
}
