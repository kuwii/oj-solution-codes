/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head) {
    var ret = [];
    var push = function(node) {
        if (node == null) {
            return;
        } else {
            push(node.next);
            ret.push(node.val);
        }
    }
    push(head);
    return ret;
}