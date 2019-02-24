// simple version
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        int size = s.size();
        int maxn = 0;
        for (int i = 0; i != size; ++i) {
            int mark[512] = {0,};
            int j = i;
            for (; j != size; ++j) {
                if (mark[s[j]] != 0) {
                    break;
                }
                mark[s[j]] = 1;
            }
            maxn = maxn > (j-i) ? maxn : (j-i);
        }
        return maxn;
    }
};

// faster version
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        int letter_position[512];
        memset(letter_position, -1, sizeof(letter_position));
        int left = -1, right = 0, maxn = 0;
        for (auto it = s.begin(), end = s.end(); it != end; ++it, ++right) {
            left = left > letter_position[*it] ? left : letter_position[*it];
            maxn = maxn > (right - left)? maxn : (right - left);
            letter_position[*it] = right;
            
        }
        return maxn;
        
    }
};