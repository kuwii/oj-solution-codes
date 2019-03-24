/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    a = a.split(''), b = b.split('');
    var ret = [], toAdd = 0;
    while (a.length != 0 && b.length != 0) {
        var curA = a.pop() - '0', curB = b.pop() - '0';
        var cur = curA + curB + toAdd;
        ret.push(cur % 2);
        toAdd = Math.floor(cur / 2);
    }
    while (a.length != 0) {
        var curA = a.pop() - '0';
        var cur = curA + toAdd;
        ret.push(cur % 2);
        toAdd = Math.floor(cur / 2);
        // console.log(toAdd, ret);
    }
    while (b.length != 0) {
        var curB = b.pop() - '0';
        var cur = curB + toAdd;
        ret.push(cur % 2);
        toAdd = Math.floor(cur / 2);
    }
    if (toAdd) {
        ret.push(toAdd);
    }
    return ret.reverse().join('');
    
};