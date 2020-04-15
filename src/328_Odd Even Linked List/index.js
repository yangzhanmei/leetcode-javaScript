/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
  if (head === null) {
    return head;
  }

  let p = head;
  let q = head.next;
  let evenHead = q;

  while (q !== null && q.next !== null) {
    p.next = p.next.next;
    p = p.next;

    q.next = q.next.next;
    q = q.next;
  }
  p.next = evenHead;

  return head;
};
