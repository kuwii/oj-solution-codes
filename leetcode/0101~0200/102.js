/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root == null) { return []; }
    var ret = [];
    var curSet = [root];
    while (curSet.length != 0) {
        var newSet = [];
        var curRet = [];
        for (var node of curSet) {
            curRet.push(node.val);
            if (node.left != null) { newSet.push(node.left); }
            if (node.right != null) { newSet.push(node.right); }
        }
        ret.push(curRet);
        curSet = newSet;
    }
    return ret;
};