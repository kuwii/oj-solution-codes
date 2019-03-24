/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var a = 1, b = 1;
    for (var i = 2; i <= n; ++i) {
        var sum = a + b;
        a = b;
        b = sum;
    }
    return b;
};