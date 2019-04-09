// Node版本需要取消注释，否则会报错找不到TreeNode的定义
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
// 以下为答案
function reConstructBinaryTree(pre, vin) {
    var build = function(pl, pr, vl, vr) {
        if (pl > pr || vl > vr) { return null; }
        var firstVal = pre[pl++];
        var node = new TreeNode(firstVal);
        var vm = vin.indexOf(firstVal);
        var vDist = vm - vl;
        node.left  = build(pl, pl+vDist-1, vl, vm-1);
        node.right = build(pl+vDist, pr, vm+1, vr);
        return node;
    }
    return build(0, pre.length-1, 0, vin.length-1);
}