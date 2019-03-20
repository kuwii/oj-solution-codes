/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) { return false; }
    var num_digits = Math.floor(Math.log(x) / Math.log(10))+1;
    var y = 0;
    for (var i = 0; i < Math.floor(num_digits/2); ++i) {
        y = y * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    if (num_digits & 1) {x = Math.floor(x / 10);}
    return x === y;
};