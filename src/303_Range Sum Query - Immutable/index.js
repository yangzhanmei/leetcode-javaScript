/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.arr = nums;
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  const nums = this.arr;
  let total = 0;
  for (i; i <= j; i++) {
    total += nums[i];
  }

  return total;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
