/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    var temp = null;
    if (nums.length <= 1) { return; }
   
    var i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i+1]) { --i; }
    
    if (i !== -1) {
        var j = nums.length - 1;
        while (j > i && nums[j] <= nums[i]) { --j; }
        temp = nums[i]; nums[i] = nums[j]; nums[j] = temp;
    }

    var l = i+1, r = nums.length-1;
    while (l < r) {
        temp = nums[l]; nums[l] = nums[r]; nums[r] = temp;
        ++l, --r;
    }
};