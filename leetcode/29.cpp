class Solution {
public:
    int divide(int dividend, int divisor) {
        printf("%d %d\n", dividend, divisor);
        
        if (dividend == 0) return 0;
        if (dividend == divisor) return 1;
        
        bool positive = (((dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0)) ? true : false);
    
        unsigned a = dividend > 0 ? (unsigned)dividend : ((unsigned)0 - (unsigned)dividend);
        unsigned b = divisor > 0 ? (unsigned)divisor : ((unsigned)0 - (unsigned)divisor);
        
        unsigned sum = 0;
        unsigned rest = a;
        while (rest >= b) {
            unsigned ret = 1;
            unsigned sub = b;
            
            while (rest > (sub << 1)) {
                sub = (sub << 1);
                ret = (ret << 1);
                // printf(" - %u %u %u\n", ret, rest, sub);
            }
            
            sum += ret;
            rest -= sub;
            // printf(" - ret: %u, rest: %u\n", ret, rest);
        }
        
        if (sum > (unsigned)2147483647 && positive) sum = (unsigned)2147483647;
        
        int result = positive ? sum : ((int)0 - (int)sum);
        
        return result;
    }
};