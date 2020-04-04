/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let result = 0;

  for (let i = 0; i < height.length; i++) {
    let leftMax = 0;
    let rightMax = 0;
    for (let j = 0; j <= i; j++) {
      leftMax = Math.max(leftMax, height[j]);
    }
    for (let k = i; k < height.length; k++) {
      rightMax = Math.max(rightMax, height[k]);
    }
    result += Math.min(leftMax, rightMax) - height[i];
  }

  return result;
};
