/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var bestRet = 0;
    
    var f_ = [];
    for (var i = 1; i < prices.length; ++i) {
        f_.push(prices[i]-prices[i-1]);
    }
    console.log(f_);
    
    var sum = 0;
    for (var i = 0; i < f_.length; ++i) {
        sum += f_[i]
        bestRet = Math.max(bestRet, sum);
        if (sum < 0) { sum = 0; }
    }
    
    return bestRet;
};