/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (root == null) return true;
    var isSame = function(pt1, pt2) {
        if (pt1 == null) {
            if (pt2 == null) { return true; }
            else { return false; }
        } else if (pt2 == null) {
            return false;
        } else {
            return isSame(pt1.right, pt2.left) && isSame(pt1.left, pt2.right) && pt1.val == pt2.val;
        }
    }
    return isSame(root.left, root.right);
};