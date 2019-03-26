/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    var check = function(node) {
        var l = node.val, r = node.val;
        if (node.left != null) {
            var ls = check(node.left);
            if (!ls[0] || ls[2] >= node.val) { return [false, 0, 0]; }
            l = ls[1];
        }
        if (node.right != null) {
            var rs = check(node.right);
            if (!rs[0] || rs[1] <= node.val) { return [false, 0, 0]; }
            r = rs[2];
        }
        return [true, l, r];
    }
    if (root == null) { return true; }
    return check(root)[0];
};