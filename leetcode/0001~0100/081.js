// ... version

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    return nums.indexOf(target) !== -1;
};

// normal version
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    var l = 0, r = nums.length-1;
    while (l <= r) {
        var m = Math.floor((l+r)/2);
        console.log(l, m, r, '|', nums[l], nums[m], nums[r]);
        if (nums[m] === target) {
            return true;
        }
        if (nums[l] === nums[m]) {
            ++l;
        } else if (nums[r] === nums[m]) {
            --r;
        } else if (nums[l] < nums[m]) {
            if (nums[l] <= target && target < nums[m]) r = m - 1;
            else l = m + 1;
        } else {
            if (nums[m] < target && target <= nums[r]) l = m + 1;
            else r = m - 1;
        }
    }
    return false;
};