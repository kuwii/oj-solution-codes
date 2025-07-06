// O(log(min(m, n)))

#include <stdio.h>

// #define DEBUG

#ifdef DEBUG
  #define debug_info(...) printf(__VA_ARGS__)
#else
  #define debug_info(...)
#endif

#define max(a, b) ((a) > (b) ? (a) : (b))
#define min(a, b) ((a) < (b) ? (a) : (b))

#define left_max(s, i) (i != 0 ? s[i-1] : -2147483648)
#define right_min(s, i, v) (i != v ? s[i] : 2147483647)

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
    //  ↓
    // (i++ -> j--)
    //
    // conditions:
    // - (1): nums1[i-1] <= nums2[j]
    // - (2): nums2[j-1] <= nums1[i]
    //  ↓
    // for max i that nums1[i-1] <= nums[j]:
    // - (i+1) -> nums1[(i+1)-1] > nums[j-1] -> nums1[i] > nums[j-1] -> satisfy condition (2)
    //  ↓
    // find max i that leftMax < rightMin

    debug_info("=====\n");
    int max_i = 0;
    int min_j = 0;

    int left = 0;
    int right = nums1Size;
    while (left <= right) {
        int i = (left + right) / 2;
        int j = (length + 1) / 2 - i;
        debug_info("i: %d, j: %d\n", i, j);
        // Index corner cases:
        // 0:    numbers all belongs to right part
        // size: numbers all belongs to left part
        int nums1LeftMax = left_max(nums1, i);
        int nums2RightMin = right_min(nums2, j, nums2Size);
        debug_info("nums1[i-1]: %d\n", nums1LeftMax);
        debug_info("nums2[j]:   %d\n", nums2RightMin);
        if (nums1LeftMax <= nums2RightMin) {
            debug_info("valid case\n=====\n");
            max_i = i;
            min_j = j;
            left = i + 1;
        } else {
            debug_info("=====\n");
            right = i - 1;
        }
    }

    debug_info("max_i:%d - min_j:%d\n", max_i, min_j);
    int nums1LeftMax = left_max(nums1, max_i);
    int nums2LeftMax = left_max(nums2, min_j);
    int leftMax = max(nums1LeftMax, nums2LeftMax);
    int nums1RightMin = right_min(nums1, max_i, nums1Size);
    int nums2RightMin = right_min(nums2, min_j, nums2Size);
    int rightMin = min(nums1RightMin, nums2RightMin);
    if (length & 1) {
        debug_info("Use left max: %d\n-----\n", leftMax);
        return leftMax;
    } else {
        debug_info("Use left max and right min: %d - %d\n-----\n", leftMax, rightMin);
        return (double)(leftMax + rightMin) / 2.0;
    }
}
