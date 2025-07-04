// O(m+n)

#include <stdio.h>

double findMedianSortedArrays(int* nums1, int nums1Size, int* nums2, int nums2Size) {
    int numsSize = nums1Size + nums2Size;
    int target = numsSize / 2 + 1;

    int i1 = 0, i2 = 0, a = 0, b = 0;
    for (int i = 0; i < target; ++i) {
        b = a;
        if (i1 < nums1Size && i2 < nums2Size) {
            a = (nums1[i1] < nums2[i2]) ? nums1[i1++] : nums2[i2++];
        } else if (i1 < nums1Size) {
            a = nums1[i1++];
        } else if (i2 < nums2Size) {
            a = nums2[i2++];
        }
    }

    if (numsSize % 2 == 1) {
        return a;
    } else {
        return (double)(a + b) / 2.0;
    }
}
