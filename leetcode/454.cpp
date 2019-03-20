class Solution {
    public:
        int fourSumCount(vector<int>& A, vector<int>& B, vector<int>& C, vector<int>& D) {
            unordered_map<int, int> sum;
            for (auto itA = A.begin(), endA = A.end(); itA != endA; ++itA) {
                for (auto itB = B.begin(), endB = B.end(); itB != endB; ++itB) {
                    int abSum = *itA + *itB;
                    if (sum.count(abSum)) { ++sum[abSum]; }
                    else { sum[abSum] = 1; }
                }
            }
            int ret = 0;
            for (auto itC = C.begin(), endC = C.end(); itC != endC; ++itC) {
                for (auto itD = D.begin(), endD = D.end(); itD != endD; ++itD) {
                    int cdSum = *itC + *itD;
                    if (sum.count(-cdSum)) { ret += sum[-cdSum]; }
                }
            }
            return ret;
        }
    };