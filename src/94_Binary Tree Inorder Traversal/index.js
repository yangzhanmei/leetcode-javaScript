/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归
// var inorderTraversal = function (root) {
//     if (root === null) {
//         return [];
//     }

//     return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];
// };

var inorderTraversal = function(root) {
  if (root === null) {
    return [];
  }

  const result = [];
  let stack = [];
  let curr = root;
  while (curr !== null || stack.length > 0) {
    if (curr) {
      stack.push(curr);
      curr = curr.left;
    } else {
      let node = stack.pop();
      result.push(node.val);
      curr = node.right;
    }
  }

  return result;
};
