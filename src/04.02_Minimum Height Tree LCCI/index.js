/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (nums.length === 0) {
    return null;
  }
  let mid = parseInt(nums.length / 2);
  let treeRoot = new TreeNode(nums[mid]);
  treeRoot.left = sortedArrayToBST(nums.slice(0, mid));
  treeRoot.right = sortedArrayToBST(nums.slice(mid + 1));

  return treeRoot;
};
