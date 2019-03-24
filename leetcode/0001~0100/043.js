/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    var addRet = function(ret, pos, toAdd) {
        if (ret.length <= pos) { ret[pos] = 0; }
        ret[pos] += toAdd;
        var more = Math.floor(ret[pos] / 10);
        ret[pos] %= 10;
        return more;
    }
    if (num1 == '0' || num2 == '0') return '0';
    
    var ret = [];
    for (var i = num2.length-1, ir=0; i >= 0; --i, ++ir) {
        var n = num2[i] - '0', toAdd = 0;
        var jr = 0;
        for (var j = num1.length-1; j >= 0; --j, ++jr) {
            var m = num1[j] - '0';
            var cal = m * n + toAdd;
            toAdd = Math.floor(cal / 10);
            toAdd += addRet(ret, ir+jr, cal%10);
        }
        while (toAdd) {
            toAdd = addRet(ret, ir+jr, toAdd%10);
            ++jr;
        }
    }
    return ret.reverse().join("");
};