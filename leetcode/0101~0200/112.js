/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    var dfs = function(node, cur) {
        console.log(node == null ? null : node.val, cur);
        if (node == null) { return false; }
        cur -= node.val;
        if (node.left == null && node.right == null) {
            if (cur == 0) { return true; }
            else { return false; }
        }
        return dfs(node.left, cur) || dfs(node.right, cur);
    }
    return root == null ? false : dfs(root, sum);
};