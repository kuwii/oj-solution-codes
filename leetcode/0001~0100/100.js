/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    var dfs = function (node1, node2) {
        if (node1 == null) {
            if (node2 == null) {
                return true;
            } else {
                return false;
            }
        } else if (node2 == null) {
            return false;
        } else {
            if (node1.val == node2.val &&
                dfs(node1.left, node2.left) &&
                dfs(node1.right, node2.right)) {
                return true;
            } else {
                return false;
            }
        }
    };
    
    return dfs(p, q);
};