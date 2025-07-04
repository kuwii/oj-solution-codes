// O(min(m, n))

#include <stdio.h>

// #define DEBUG

#ifdef DEBUG
  #define debug_info(...) printf(__VA_ARGS__)
#else
  #define debug_info(...)
#endif

#define max(a, b) ((a) > (b) ? (a) : (b))
#define min(a, b) ((a) < (b) ? (a) : (b))

double findMedianSortedArrays(int* nums1, int nums1Size, int* nums2, int nums2Size) {
    if (nums1Size > nums2Size) {
        return findMedianSortedArrays(nums2, nums2Size, nums1, nums1Size);
    }

    int length = nums1Size + nums2Size;
    if (length == 0) {
        return 0.0;
    }
    debug_info("Length: %d %d\n", length, (length & 1));

    // [nums1[0], ..., nums1[i-1]] | [nums1[i], ..., nums1[nums1Size-1]]
    // [nums2[0], ..., nums2[j-1]] | [nums2[i], ..., nums2[nums2Size-1]]
    //  ↓
    // - Odd:  i + j = ((nums1Size-1) - i + 1) + ((nums2Size-1) - j + 1) + 1
    // - Even: i + j = ((nums1Size-1) - i + 1) + ((nums2Size-1) - j + 1)
    //  ↓
    // - Odd:  2i + 2j = nums1Size + nums2Size + 1
    // - Even: 2i + 2j = nums1Size + nums2Size
    //  ↓
    // - Odd:  j = (nums1Size + nums2Size + 1) / 2 - i
    // - Even: j = (nums1Size + nums2Size) / 2 - i
    //  ↓
    // - j = ⌊ (length + 1) / 2 ⌋ - i
    debug_info("=====\n");
    for (int i = 0; i <= nums1Size; ++i) {
        int j = (length + 1) / 2 - i;
        if (j < 0 || j > nums2Size) {
            continue;
        }
        debug_info("i: %d, j: %d\n", i, j);
        // Index corner cases:
        // 0:    numbers all belongs to right part
        // size: numbers all belongs to left part
        int nums1LeftMax = i != 0 ? nums1[i - 1] : -2147483648;
        int nums2LeftMax = j != 0 ? nums2[j - 1] : -2147483648;
        int nums1RightMin = i != nums1Size ? nums1[i] : 2147483647;
        int nums2RightMin = j != nums2Size ? nums2[j] : 2147483647;
        debug_info("nums1: %d | %d\n", nums1LeftMax, nums1RightMin);
        debug_info("nums2: %d | %d\n", nums2LeftMax, nums2RightMin);
        debug_info("=====\n");
        if (nums1LeftMax <= nums2RightMin && nums2LeftMax <= nums1RightMin) {
            int leftMax = max(nums1LeftMax, nums2LeftMax);
            if (length & 1) {
                debug_info("Use left max: %d\n-----\n", leftMax);
                return leftMax;
            } else {
                int rightMin = min(nums1RightMin, nums2RightMin);
                debug_info("Use left max and right min: %d - %d\n-----\n", leftMax, rightMin);
                return (double)(leftMax + rightMin) / 2.0;
            }
        }
    }

    return -2147483647.0;
}
