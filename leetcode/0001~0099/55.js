// O(n^2) version
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var reachable = [true], target = nums.length-1;
    for (var i = 0, end = nums.length; i != end; ++i) {
        if (!reachable[i]) break;
        for (var step = 0, maxs = nums[i]; step <= maxs; ++step) {
            if (i + step > target) { break; }
            reachable[i + step] = true;
        }
        // console.log(i, reachable);
    }
    return Boolean(reachable[target]);
};

// O(n) version
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var rightMost = 0;
    for (var i = 0; i != nums.length; ++i) {
        if (rightMost < i) break;
        rightMost = Math.max(rightMost, i + nums[i]);
    }
    return rightMost >= nums.length-1;
};