class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> base;
        int position = 0;
        for (auto it = nums.begin(), end = nums.end(); it != end; ++it, ++position) {
            if (base.count(target - *it)) {
                vector<int> ret;
                ret.push_back(base[target-*it]);
                ret.push_back(position);
                return ret;
            } else {
                base[*it] = position;
            }
        }
        return vector<int>();
    }
};