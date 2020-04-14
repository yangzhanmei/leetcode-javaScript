/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if (head === null) {
    return head;
  }
  let q = new Node();
  let p = q;
  let curr = head;
  let obj = new Map();

  while (curr !== null) {
    p.val = curr.val;
    p.next = curr.next ? new Node() : null;
    obj.set(curr, p);
    p = p.next;
    curr = curr.next;
  }

  p = q;
  while (head !== null) {
    p.random = head.random ? obj.get(head.random) : null;
    p = p.next;
    head = head.next;
  }

  return q;
};
