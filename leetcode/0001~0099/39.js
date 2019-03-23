/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var ret = [];
    var searchAns = function(nums, sum, curPos) {
        console.log(nums, curPos, '=', sum, sum===target);
        if (sum === target) {
            var ans = [];
            for (var it of nums) {
                ans.push(it);
            }
            ret.push(ans);
        }
        for (var i = curPos; i != candidates.length; ++i) {
            if (sum + candidates[i] <= target) {
                nums.push(candidates[i]);
                searchAns(nums, sum+candidates[i], i);
                nums.pop();
            }
        }
    }
    searchAns([], 0, 0);
    return ret;
};