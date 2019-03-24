/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length <= 1) { return nums.length; }
    
    var movPt = 0, mov1 = nums[0], mov2 = nums[1];
    for (var i = 2; i != nums.length; ++i) {
        if (nums[i-1] != nums[i] || nums[i-2] != nums[i]) {
            nums[movPt++] = mov1;
            mov1 = mov2;
            mov2 = nums[i];
        }
    }
    nums[movPt++] = mov1;
    nums[movPt++] = mov2
    
    return movPt;
};