/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    var ret = [], curSet = [];
    var search = function(level, index) {
        for (var i = index; i <= n; ++i) {
            // console.log(level, i);
            curSet.push(i);
            if (level == k) {
                var ans = []; for (var num of curSet) { ans.push(num); }
                // console.log(ans);
                ret.push(ans);
            } else {
                search(level+1, i+1);
            }
            curSet.pop(i);
        }
    }
    search(1, 1);
    return ret;
};