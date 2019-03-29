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
var levelOrderBottom = function(root) {
    if (root == null) { return []; }
    var ret = [];
    var curQueue = [root];
    while (curQueue.length != 0) {
        var nums = [];
        var newQueue = [];
        for (var node of curQueue) {
            nums.push(node.val);
            if (node.left != null) { newQueue.push(node.left); }
            if (node.right != null) { newQueue.push(node.right); }
        }
        curQueue = newQueue;
        ret.push(nums);
    }
    return ret.reverse();
};