/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    var dfs = function(pl, pr, il, ir) {
        if (pl > pr) { return null; }
        var root = new TreeNode(preorder[pl]);
        for (var i = il; i <= ir; ++i) {
            if (preorder[pl] == inorder[i]) {
                root.left = dfs(pl+1, pl+(i-il), il, i-1);
                root.right = dfs(pl+(i-il)+1, pr, i+1, ir);
                break;
            }
        }
        return root;
    }
    return dfs(0, preorder.length-1, 0, inorder.length-1)
};
