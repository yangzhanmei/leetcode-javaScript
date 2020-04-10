/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {TreeNode} tree
 * @return {ListNode[]}
 */
var listOfDepth = function(tree) {
  const result = [];
  const queue = [];
  const levalObj = {};
  queue.push(tree);
  tree.leval = 1;

  while (queue.length > 0) {
    const current = queue.shift();
    const { leval, left, right, val } = current;
    const currentNode = new ListNode(val);

    if (!levalObj[leval]) {
      levalObj[leval] = currentNode;
    } else {
      let p = levalObj[leval];
      while (p.next != null) {
        p = p.next;
      }
      p.next = currentNode;
    }
    if (left !== null) {
      queue.push(left);
      current.left.leval = leval + 1;
    }
    if (right !== null) {
      queue.push(right);
      current.right.leval = leval + 1;
    }
  }

  Object.keys(levalObj).forEach(item => {
    result.push(levalObj[item]);
  });

  return result;
};
