/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    if (nums.length == 0) return [];
    
    var sortFunc = function(a, b) {return a-b;}
    nums.sort(sortFunc);
    var s = [], t = [];
    for (var i = 0, cur = null; i != nums.length; ++i) {
        if (nums[i] == cur) {
            t[t.length-1] += 1;
        } else {
            cur = nums[i];
            s.push(nums[i]);
            t.push(1);
        }
    }
    var ret = [], curSet = [];
    var dfs = function(pos) {
        if (pos == s.length) {
            var ans = [];
            for (var num of curSet) { ans.push(num); }
            ret.push(ans);
            return;
        }
        var howMany = t[pos];
        dfs(pos+1);
        for (var j = 0; j != howMany; ++j) {
            curSet.push(s[pos]);
            dfs(pos+1);
        }
        for (var j = 0; j != howMany; ++j) {
            curSet.pop();
        }
        
    }
    dfs(0);
    return ret;
};