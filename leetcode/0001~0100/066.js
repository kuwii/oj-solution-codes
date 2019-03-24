/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var toAdd = 1;
    for (var i = digits.length-1; i >= 0; --i) {
        digits[i] += toAdd;
        toAdd = Math.floor(digits[i] / 10);
        digits[i] %= 10;
    }
    if (toAdd) {
        digits = [1].concat(digits);
    }
    return digits;
};