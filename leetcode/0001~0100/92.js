/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    var rLen = n-m+1, t = head;
    if (rLen == 0) return head;
    
    var h = new ListNode(-1);
    h.next = head;
    
    var pt1 = h;
    while (--m) { pt1 = t; t = t.next; }
    
    var pt2 = t, pt3 = t;
    while (rLen--) {
        var cur = t;
        t = t.next;
        cur.next = pt3;
        pt3 = cur;
    }
    pt1.next = pt3;
    pt2.next = t;
    
    return h.next;
};