// O(n) version
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var maxn = nums[0];
    var curSum = 0;
    for (var num of nums) {
        curSum += num;
        if (curSum > maxn) { maxn = curSum; }
        if (curSum < 0) { curSum = 0; }
    }
    return maxn;
};

// the divide and conquer version
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var find_ans = function(nums, l, r) {
        if (l == r) { return nums[l]; }
        
        var m = Math.floor((l+r)/2);
        var maxL = nums[m], maxR = nums[m];
        for (var i = m-1, curSum = nums[m]; i >= l; --i) {
            curSum += nums[i];
            if (curSum > maxL) { maxL = curSum; }
        }
        for (var i = m+1, curSum = nums[m]; i <= r; ++i) {
            curSum += nums[i];
            if (curSum > maxR) { maxR = curSum; }
        }
        
        var max = maxL + maxR - nums[m];
        if (l < m) { max = Math.max(max, find_ans(nums, l, m-1)); }
        if (r > m) { max = Math.max(max, find_ans(nums, m+1, r)); }
        
        return max;
    }
    
    return find_ans(nums, 0, nums.length-1);
};