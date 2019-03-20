/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    sortfunc = function (a,b) { return a - b; }
    nums.sort(sortfunc);
    
    var length = nums.length;
    var end_i = nums.length-3, end_j = nums.length-2, back = nums.length-1;
    var ret = [];
    
    // console.log(nums);
    for (var i = 0; i < end_i; ++i) {
        if (i > 0 && nums[i] === nums[i-1]) continue;
        for (var j = i+1; j < end_j; ++j) {
            if (j > i+1 && nums[j] === nums[j-1]) continue;
            // console.log('-', i, j, nums[i], nums[j]);
            var k = j+1, l = back;
            while (k < l) {
                var sum = nums[i] + nums[j] + nums[k] + nums[l];
                if (sum === target) {
                    ret.push([nums[i], nums[j], nums[k], nums[l]]);
                    // console.log('   ', nums[i], nums[j], nums[k], nums[l]);
                    while(k < l && nums[k] === nums[k+1]) ++k;
                    while(k < l && nums[l] === nums[l-1]) --l;
                    ++k, --l;
                } else if (sum < target) {
                    while(k < l && nums[k] === nums[k+1]) ++k;
                    ++k
                } else {
                    while(k < l && nums[l] === nums[l-1]) --l;
                    --l;
                }
            }
        }
    }
    return ret;
};