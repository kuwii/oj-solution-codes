/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    var ret = [], num = Math.pow(2, n);
    for (var i = 0; i < num; ++i) {
        ret.push(i^(i>>1));
    }
    return ret;
};