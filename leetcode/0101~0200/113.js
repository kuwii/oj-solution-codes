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
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    var ret = [], path = [];
    var dfs = function(node, cur) {
        if (node == null) { return false; }
        cur -= node.val;
        path.push(node.val);
        if (node.left == null && node.right == null) {
            if (cur == 0) {
                var ans = [];
                for (var n of path) {
                    ans.push(n);
                }
                ret.push(ans);
            }
        }
        dfs(node.left, cur);
        dfs(node.right, cur);
        path.pop();
    }
    dfs(root, sum);
    return ret;
};