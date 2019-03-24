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
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (k == 0 || head == null || head.next == null) return head;
    
    var h = head, t = head, end = null;
    while (k--) {
        if (t.next == null) {
            end = t;
            t.next = h;
        }
        t = t.next;
    }
    console.log(h.val, t.val, (end != null ? end.val : null));
    while (t != end && t.next != null) {
        h = h.next;
        t = t.next;
    }
    var ret = h.next;
    t.next = head;
    h.next = null;
    return ret;
};