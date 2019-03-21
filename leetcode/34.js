/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var found = false;
    var l, r;
    
    l = 0, r = nums.length-1;
    while (l <= r) {
        var m = Math.floor((l + r) / 2);
        if (target === nums[m]) {
            found = true;
            if (m >= 0 && nums[m-1] === nums[m]) {
                r = m-1;
            } else {
                l = m;
                break;
            }
        } else if (target < nums[m]) {
            r = m-1;
        } else {
            l = m+1;
        }
    }
    var start = l;
    
    if (!found) return [-1, -1];
    
    l = 0, r = nums.length-1;
    while (l <= r) {
        var m = Math.floor((l + r) / 2);
        if (target === nums[m]) {
            if (m < nums.length && nums[m+1] === nums[m]) {
                l = m+1;
            } else {
                r = m;
                break;
            }
        } else if (target < nums[m]) {
            r = m-1;
        } else {
            l = m+1;
        }
    }
    var end = r;
    
    return [start, end];
};