/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if (head == null) { return null; }
    var sortedArrayToBST = function(nums) {
        var dfs = function(l, r) {
            if (l > r) { return null; }
            var m = Math.floor((l+r)/2);
            var node = new TreeNode(nums[m]);
            node.left = dfs(l, m-1);
            node.right = dfs(m+1, r);
            return node;
        }
        return dfs(0, nums.length-1);
    };
    var s = [];
    while (head != null) {
        s.push(head.val);
        head = head.next;
    }
    return sortedArrayToBST(s);
};
