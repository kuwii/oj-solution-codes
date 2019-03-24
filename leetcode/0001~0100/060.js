/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    var nums = [];
    for (var i = 1; i <= n; ++i) {
        nums.push(i);
    }
    
    while (--k) {
        var temp = null;
        if (nums.length <= 1) { return; }

        var i = nums.length - 2;
        while (i >= 0 && nums[i] >= nums[i+1]) { --i; }

        if (i !== -1) {
            var j = nums.length - 1;
            while (j > i && nums[j] <= nums[i]) { --j; }
            temp = nums[i]; nums[i] = nums[j]; nums[j] = temp;
        }

        var l = i+1, r = nums.length-1;
        while (l < r) {
            temp = nums[l]; nums[l] = nums[r]; nums[r] = temp;
            ++l, --r;
        }
        
    }
    
    return nums.join('');
};