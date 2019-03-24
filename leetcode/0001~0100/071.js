/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    var dirs = path.split('/'), stack = [''];
    for (var dir of dirs) {
        if (dir == '' || dir == '.') {
            continue
        } else if (dir == '..') {
            if (stack.length != 1) {
                stack.pop();
            }
        } else {
            stack.push(dir);
        }
    }
    if (stack.length == 1) { stack.push(''); }
    return stack.join('/');
};