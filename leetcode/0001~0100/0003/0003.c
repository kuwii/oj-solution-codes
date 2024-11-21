#include <string.h>

int lengthOfLongestSubstring(char* s) {
    int index[300];
    int strLen = strlen(s);
    int maxLen = 0;

    memset(index, -1, sizeof(index));

    int start = 0, curLen = 0;
    for (int i = 0; i != strLen; ++i) {
        char curChar = s[i];
        if (index[curChar] == -1) {
            ++curLen;
        } else {
            int newStart = index[curChar] + 1;
            for (int j = start; j != newStart; ++j) {
                index[s[j]] = -1;
            }
            start = newStart;
            curLen = i - start + 1;
        }
        if (curLen > maxLen) {
            maxLen = curLen;
        }
        index[curChar] = i;
    }

    return maxLen;
}