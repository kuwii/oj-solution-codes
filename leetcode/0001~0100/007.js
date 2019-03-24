/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var ret = 0;
    while (x != 0) {
        ret *= 10;
        ret += x % 10;
        x = x > 0 ? Math.floor(x / 10) : Math.ceil(x / 10);
        // console.log(ret, x)
    }
    if (ret > 2147483647 || ret < -2147483648) return 0;
    return ret;
};