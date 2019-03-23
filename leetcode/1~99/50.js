// ...version
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    return Math.pow(x, n);
};

// normal version
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    var searched = {
        [0]: 1,
        [-1]: 1/x,
        [1]: x
    };
    var pow = function(t) {
        if (searched.hasOwnProperty(t)) {
            return searched[t];
        }
        var a = Math.floor(t/2); var b = t - a;
        var ret = pow(a) * pow(b);
        searched[t] = ret;
        return ret;
    }
    
    return pow(n);
};