/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    sortfunc = function (a,b) { return a - b; }
    nums.sort(sortfunc);
    var minDiff = -1, minn = 0;
    var end_i = nums.length-2, back = nums.length-1;
    // console.log(nums); console.log('---');
    for (var i = 0; i < end_i; ++i) {
        var lr_target = target - nums[i], l = i+1, r = back;
        while (l < r) {
            var lr_sum = nums[l] + nums[r];
            var diff = Math.abs(lr_sum - lr_target);
            // console.log(i, l, r, '->', nums[i], nums[l], nums[r], '->', lr_sum+nums[i], target, diff, minDiff);
            if (diff === 0) { return target; };
            if (diff < minDiff || minDiff === -1) {
                minDiff = diff;
                minn = lr_sum+nums[i];
            }
            
            if (lr_sum < lr_target) { ++l; }
            else { --r; }
            // console.log('best:', minn);
        }
        
    }
    return minn;
};
