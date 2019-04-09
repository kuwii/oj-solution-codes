let stack1 = [], stack2 = [];
function push(node) {
    for (let it of stack1) {
        stack2.push(it);
    }
    stack1 = [node];
    for (let it of stack2) {
        stack1.push(it);
    }
    stack2 = [];
}
function pop() {
    return stack1.pop();
}