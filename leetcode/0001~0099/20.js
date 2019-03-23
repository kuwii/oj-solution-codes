/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var push = {
        '(': 1,
        '{': 1,
        '[': 1,
    }
    var match = {
        ')': '(',
        '}': '{',
        ']': '[',
    };
    var stack = [];
    
    for (var c of s) {
        if (push.hasOwnProperty(c)) {
            stack.push(c);
        } else {
            if (stack[stack.length-1] == match[c]) {
                stack.pop();
            } else {
                return false;
            }
        }
        // console.log(c, stack);
    }
    
    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
};