// dfs version
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var ret = [];
    var search = function(numset, pos) {
        if (pos >= nums.length) {
            var oneRet = [];
            for (var num of numset) {
                oneRet.push(num);
            }
            ret.push(oneRet);
            return;
        }
        numset.push(nums[pos]);
        search(numset, pos+1);
        numset.pop();
        search(numset, pos+1);
    }
    search([], 0);
    return ret;
};

// bfs version
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var ret = [[]];
    for (var num of nums) {
        var newRet = [];
        for (var state of ret) {
            var newState1 = [], newState2 = [];
            for (var n of state) {
                newState1.push(n);
                newState2.push(n);
            }
            newState1.push(num);
            newRet.push(newState1);
            newRet.push(newState2);
        }
        ret = newRet;
    }
    return ret;
};