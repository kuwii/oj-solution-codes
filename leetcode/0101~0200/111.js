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
var minDepth = function(root) {
    if (root == null) { return 0; }
    var queue = [root], depth = 0;
    while (queue.length != 0) {
        var newQueue = [];
        for (var node of queue) {
            if (node == null) {
                continue;
            } if (node.left == null && node.right == null) {
                return depth+1;
            } else {
                newQueue.push(node.left);
                newQueue.push(node.right);
            }
        }
        depth += 1;
        queue = newQueue;
    }
    return depth;
};