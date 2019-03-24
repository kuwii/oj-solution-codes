/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    var l = new ListNode(-1); var lt = l;
    var r = new ListNode(-1); var rt = r;
    for (var it = head; it != null; it = it.next) {
        if (it.val < x) {
            lt.next = it;
            lt = lt.next;
        } else {
            rt.next = it;
            rt = rt.next;
        }
    }
    lt.next = r.next;
    rt.next = null;
    return l.next;
};