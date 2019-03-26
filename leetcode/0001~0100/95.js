/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    var search = function(l, r) {
        var ret = [];
        if (l > r) { ret.push(null); }
        for (var i = l; i <= r; ++i) {
            var ls = search(l, i-1);
            var rs = search(i+1, r);
            for (var itL of ls) {
                for (var itR of rs) {
                    var root = new TreeNode(i);
                    root.left = itL;
                    root.right = itR;
                    ret.push(root);
                }
            }
        }
        return ret;
    }

    if (n <= 0) { return []; }
    else { return search(1, n); }
};