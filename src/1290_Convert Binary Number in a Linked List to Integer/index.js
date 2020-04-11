/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
  let numStr = '';
  let p = head;

  while (p !== null) {
    numStr += p.val;
    p = p.next;
  }

  return parseInt(numStr, 2);
};
