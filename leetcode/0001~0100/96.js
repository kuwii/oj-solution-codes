// modified from 95
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    var search = function(l, r) {
        if (l > r) { return 1; }
        var ret = 0;
        for (var i = l; i <= r; ++i) {
            ret += search(l, i-1) * search(i+1, r);
        }
        return ret;
    }

    if (n <= 0) { return 0; }
    else { return search(1, n); }
};

// dp
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    var nums = [1, 1];
    for (var i = 2; i < n+1; ++i) {
        nums[i] = 0;
        for (var j = 0; j < i; ++j) {
            nums[i] += nums[j] * nums[i-j-1];
        }
    }
    nums[0] = 0;
    return nums[n];
};