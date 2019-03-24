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
    var curNum = null; var ok = true;
    for (var it = head; it != null; it = it.next) {
        var cur = it.val;
        // console.log(curNum, cur);
        if (cur != curNum) {
            if (ok && curNum != null) {
                retTail.next = new ListNode(curNum);
                retTail = retTail.next;
            }
            curNum = cur;
            ok = true;
        } else {
            ok = false;
        }
    }
    if (ok) { retTail.next = new ListNode(curNum); }
    return ret.next;
};