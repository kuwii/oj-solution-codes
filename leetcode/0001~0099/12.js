/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var ret = [];
    var letter = [
        [1000, 'M'], [900, 'CM'],
        [500, 'D'], [400, 'CD'],
        [100, 'C'], [90, 'XC'],
        [50, 'L'], [40, 'XL'],
        [10, 'X'], [9, 'IX'],
        [5, 'V'], [4, 'IV'],
        [1, 'I'],
    ];
    for (var pair of letter) {
        var numLetter = Math.floor(num/pair[0]);
        while (numLetter--) { ret.push(pair[1]); }
        num %= pair[0];
    }
    
    return ret.join("");
};