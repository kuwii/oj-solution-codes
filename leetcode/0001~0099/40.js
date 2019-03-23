/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort();
    var ret = [];
    var searchAns = function(nums, sum, curPos) {
        // console.log(nums, curPos, '=', sum, sum===target);
        if (sum === target) {
            var ans = [];
            for (var it of nums) {
                ans.push(it);
            }
            ret.push(ans);
        }
        var viewed = false;
        for (var i = curPos+1; i != candidates.length; ++i) {
            if (viewed) {
                if (candidates[i] === candidates[i-1]) continue;
            }
            viewed = true;
            if (sum + candidates[i] <= target) {
                nums.push(candidates[i]);
                searchAns(nums, sum+candidates[i], i);
                nums.pop();
            }
        }
    }
    searchAns([], 0, -1);
    return ret;
};