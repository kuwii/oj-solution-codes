/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    var stack = [root, 'w'], ret = [];
    while (stack.length != 0) {
        var state = stack.pop();
        var node = stack.pop();
        if (node == null) {
            continue;
        } else if (state == 'w') {
            stack.push(node);
            stack.push('r');
            stack.push(node.left);
            stack.push('w');
        } else {
            ret.push(node.val);
            stack.push(node.right);
            stack.push('w');
        }
    }
    console.log(ret);
    return ret;
};