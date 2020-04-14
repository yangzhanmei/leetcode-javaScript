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
var reverseList = function(head) {
  let node = new ListNode();
  let result = node;

  while (head !== null) {
    let p = new ListNode();
    p.val = head.val;
    p.next = result.next;
    result.next = p;
    head = head.next;
  }

  result = node.next;

  return result;
};
