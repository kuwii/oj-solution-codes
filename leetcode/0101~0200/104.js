/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root == null) { return 0; }
    var maxn = 0;
    var dfs = function(node, depth) {
        if (depth > maxn) { maxn = depth; }
        if (node.left != null) { dfs(node.left, depth+1); }
        if (node.right != null) { dfs(node.right, depth+1); }
    }
    dfs(root, 1);
    return maxn;
};