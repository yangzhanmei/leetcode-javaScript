/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
var kthToLast = function(head, k) {
  const res = [];
  let p = head;

  while (p !== null) {
    res.push(p.val);
    p = p.next;
  }

  return res[res.length - k];
};
