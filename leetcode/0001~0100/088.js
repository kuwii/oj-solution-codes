/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var pt1 = 0, pt2 = 0;
    var ret = [];
    while (pt1 < m && pt2 < n) {
        if (nums1[pt1] < nums2[pt2]) {
            ret.push(nums1[pt1++]);
        } else {
            ret.push(nums2[pt2++]);
        }
    }
    while (pt1 < m) {
        ret.push(nums1[pt1++]);
    }
    while (pt2 < n) {
        ret.push(nums2[pt2++]);
    }
    for (var i = 0; i != ret.length; ++i) {
        nums1[i] = ret[i];
    }
};