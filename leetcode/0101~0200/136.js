/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort();
    var ret = null;
    var curNum = null, first = true;
    for (var i = 0; i < nums.length; ++i) {
        // console.log(nums, i, nums[i]);
        if (first) {
            curNum = nums[i];
            first = false;
        } else if (curNum != nums[i]) {
            return curNum;
        } else {
            first = true;
        }
    }
    return curNum;
};