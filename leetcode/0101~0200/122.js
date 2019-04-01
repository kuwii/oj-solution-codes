/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var sum = 0;
    for (var i = 1; i < prices.length; ++i) {
        var minus = prices[i] - prices[i-1];
        if (minus > 0) { sum += minus; }
    }
    return sum;
};