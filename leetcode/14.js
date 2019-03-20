/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return '';
    if (strs.length === 1) return strs[0];
    if (strs[0] === '') return '';
    
    var ret = '';
    var cur = 0;
    while (true) {
        if (cur == strs[0].length) break;
        var curChar = strs[0][cur], ok = true;
        for (var i = 1; i != strs.length; ++i) {
            if (cur === strs[i].length || strs[i][cur] !== curChar) {
                ok = false;
                break;
            }
        }
        if (ok) {
            ret += curChar;
            ++cur;
        } else {
            break;
        }
    }
    
    return ret;
};