/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function(n, m) {
  let nums = [];
  for (let i = 0; i < n; i++) {
    nums.push(i);
  }
  let j = m;
  while (nums.length > 1) {
    j--;
    if (j >= nums.length) {
      j = j % nums.length;
    }
    nums.splice(j, 1);
    j += m;
  }

  return nums[0];
};
