/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    var dfs = function(l, r) {
        if (l > r) { return null; }
        var m = Math.floor((l+r)/2);
        var node = new TreeNode(nums[m]);
        node.left = dfs(l, m-1);
        node.right = dfs(m+1, r);
        return node;
    }
    return dfs(0, nums.length-1);
};