/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    var nextPermutation = function() {
        var temp = null;
        var i = nums.length - 2;
        while (i >= 0 && nums[i] >= nums[i+1]) { --i; }

        if (i !== -1) {
            var j = nums.length - 1;
            while (j > i && nums[j] <= nums[i]) { --j; }
            temp = nums[i]; nums[i] = nums[j]; nums[j] = temp;
        } else {
            return false;
        }

        var l = i+1, r = nums.length-1;
        while (l < r) {
            temp = nums[l]; nums[l] = nums[r]; nums[r] = temp;
            ++l, --r;
        }
        
        return true;
    };
    
    var sortFunc = function (a, b) {
        return a - b;
    }
    nums.sort(sortFunc);
    
    var ret = [];
    while (true) {
        var cur = [];
        for (var num of nums) { cur.push(num); }
        ret.push(cur);
        if (!nextPermutation()) { break; }
    }
    
    return ret;
};