/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (head === null) return null;
    
    var l = head, r = head;
    var last = null;
    while (--n) {
        r = r.next;
    }
    while (r.next !== null) {
        last = l, l = l.next, r = r.next;
    }
    
    if (last == null) {
        if (l.next != null) return l.next;
        else return null;
    }
    last.next = l.next;
    return head;
};