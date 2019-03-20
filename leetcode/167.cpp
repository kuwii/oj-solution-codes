class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
        unordered_map<int, int> base;
        int i = 0;
        for (auto cur: numbers) {
            ++i;
            int toFind = target - cur;
            if (base.count(toFind)) {
                vector<int> ret;
                ret.push_back(base[toFind]);
                ret.push_back(i);
                return ret;
            }
            base[cur] = i;
        }
        
        return vector<int>();
    }
};