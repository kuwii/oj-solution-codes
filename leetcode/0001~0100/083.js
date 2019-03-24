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
var deleteDuplicates = function(head) {
    if (head == null || head.next == null) { return head; }
    var ret = new ListNode(-1); var retTail = ret;
    var curNum = null;
    for (var it = head; it != null; it = it.next) {
        var cur = it.val;
        if (cur != curNum) {
            retTail.next = it;
            retTail = retTail.next;
            curNum = cur;
        }
    }
    retTail.next = null;
    return ret.next;
};