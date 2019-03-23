/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    --m, --n;
    var mn = m+n;
    var ret = 1;
    // C(m, m+n)
    while(mn != n) {
        ret *= mn;
        mn -= 1;
    }
    while(m) {
        ret /= m;
        m -= 1;
    }
    return ret;
};