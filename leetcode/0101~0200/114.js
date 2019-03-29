/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    var head = new TreeNode(-1); var tail = head;
    var dfs = function(node) {
        // console.log(node == null ? null : node.val);
        if (node == null) { return; }
        var leftNode = node.left, rightNode = node.right;
        tail.right = node; tail = tail.right;
        node.left = null;
        dfs(leftNode);
        dfs(rightNode);
    };
    dfs(root);
};