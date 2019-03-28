/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    var dfs = function(il, ir, pl, pr) {
        if (pl > pr) { return null; }
        var root = new TreeNode(postorder[pr]);
        for (var i = ir; i >= il; --i) {
            if (postorder[pr] == inorder[i]) {
                root.right = dfs(i+1, ir, pr-(ir-i), pr-1);
                root.left = dfs(il, i-1, pl, pr-(ir-i)-1);
                break;
            }
        }
        return root;
    }
    return dfs(0, inorder.length-1, 0, postorder.length-1)
};