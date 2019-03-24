// counting sort (two-pass) version
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var counts = [0, 0, 0];
    for (var i = 0; i != nums.length; ++i) {
        counts[nums[i]] += 1;
    }
    for (var i = 0, j = 0; i != counts.length; ++i) {
        for (var k = 0; k != counts[i]; ++k) {
            nums[j++] = i;
        }
    }
};

// two pointer (one-pass) version
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var pt0 = 0, pt2 = nums.length-1;
    for (var i = pt0; i <= pt2; ++i) {
        if (nums[i] == 0) {
            var temp = nums[i];
            nums[i] = nums[pt0];
            nums[pt0] = temp;
            ++pt0;
        }
        if (nums[i] == 2) {
            var temp = nums[i];
            nums[i] = nums[pt2];
            nums[pt2] = temp;
            --pt2; --i;
        }
    }
};