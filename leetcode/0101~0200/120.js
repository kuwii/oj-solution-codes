/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    if (triangle.length == 0) { return 0; }
    var lastMin = triangle[0];
    for (var i = 1; i != triangle.length; ++i) {
        var curMin = [triangle[i][0]+lastMin[0]];
        for (var j = 0; j != lastMin.length; ++j) {
            curMin[j]   = Math.min(curMin[j]  , triangle[i][j]   + lastMin[j]);
            curMin[j+1] = triangle[i][j+1] + lastMin[j];
        }
        lastMin = curMin;
    }
    var ret = lastMin[0];
    for (var i = 1; i != lastMin.length; ++i) {
        ret = Math.min(ret, lastMin[i]);
    }
    return ret;
};