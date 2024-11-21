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

int main() {
    int in11[2] = {1, 3}, in12[1] = {2};
    double out1 = findMedianSortedArrays(in11, 2, in12, 1);
    printf("%f\n", out1);
    int in21[2] = {1, 2}, in22[2] = {3, 4};
    double out2 = findMedianSortedArrays(in21, 2, in22, 2);
    printf("%f\n", out2);
    int *in31 = NULL, *in32 = NULL;
    double out3 = findMedianSortedArrays(in31, 0, in32, 0);
    printf("%f\n", out3);
    int *in41 = NULL, in42[1] = {1};
    double out4 = findMedianSortedArrays(in41, 0, in42, 1);
    printf("%f\n", out4);
    return 0;
}