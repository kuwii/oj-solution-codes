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
var isBalanced = function(root) {
    var ok = true;
    var dfs = function(node) {
        if (node == null) { return 0; }
        var l = dfs(node.left);
        var r = dfs(node.right);
        if (l == -1 || r == -1 || Math.abs(l-r) > 1) { return -1 }
        else { return Math.max(l, r)+1; }
    };
    return dfs(root) != -1;
};