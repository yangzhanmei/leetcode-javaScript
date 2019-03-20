/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */

const rangeSumBST = function(root, L, R) {
    let total = 0;
    getRangeSum(root, L, R);
    
    function getRangeSum(root, L, R) {
        if(!root) {
            return null;
        }
        if(root.val >= L && root.val <= R) {
            total += root.val;
            root.left && getRangeSum(root.left,L,R);
            root.right && getRangeSum(root.right,L,R);
        }else if(root.val < L) {
            root.right && getRangeSum(root.right,L,R);
        }else if(root.val > R) {
            root.left && getRangeSum(root.left,L,R);
        }
    }
    
    return total;
};