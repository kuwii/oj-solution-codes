/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var ret = [["", 0, 0]];
    var round = n * 2;
    while (round--) {
        var newRet = [];
        for (var state of ret) {
            var str = state[0];
            var numLeft = state[1], numRight = state[2];
            if (numLeft < n) {
                newRet.push([str+'(', numLeft+1, numRight]);
            }
            if (numLeft > numRight && numRight < n) {
                newRet.push([str+')', numLeft, numRight+1]);
            }
        }
        ret = newRet;
        // console.log(ret);
    }
    var final = [];
    for (var state of ret) {
        final.push(state[0]);
    }
    return final;
};