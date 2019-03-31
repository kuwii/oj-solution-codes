/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (root == null) { return null; }
    var bfs = [root, null];
    while (bfs.length != 1) {
        var newBfs = [];
        for (var i = 0, end = bfs.length-1; i != end; ++i) {
            bfs[i].next = bfs[i+1];
            if (bfs[i].left != null) {
                newBfs.push(bfs[i].left);
            }
            if (bfs[i].right != null) {
                newBfs.push(bfs[i].right);
            }
        }
        newBfs.push(null);
        bfs = newBfs;
    }
    return root;
};