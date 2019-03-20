/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var letters = {
        '1': '',
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }
    var ret = [""];
    for (var c of digits) {
        var newRet = [];
        for (var str of ret) {
            for (var letter of letters[c]) {
                newRet.push(str+letter);
            }
        }
        ret = newRet;
    }
    if (ret[0] === "") return [];
    return ret;
};