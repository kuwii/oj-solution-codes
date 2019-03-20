// simple version
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var maxn = 0, end = height.length;
    for (var i = 0; i != end; ++i) {
        for (var j = i+1; j != end; ++j) {
            var area = (j-i)*(height[j] > height[i] ? height[i] : height[j]);
            if (area > maxn) {maxn = area};
        }
    }
    return maxn;
};

// faster version
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var maxn = 0, left = 0, right = height.length - 1;
    while (left < right) {
        area = (right - left) * (height[left] > height[right] ? height[right] : height[left]);
        if (area > maxn) maxn = area;
        height[left] > height[right] ? --right : ++left;
    }
    return maxn;
};