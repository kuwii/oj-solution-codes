/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    ret = [];
    if (numRows === 1) return s;
    for (var i = 0; i != numRows; ++i) {
        var dist1 = (numRows-i-1)*2, dist2 = i*2;
        console.log(dist1, dist2);
        var cur = i, length = s.length;
        while (cur < length) {
            if (cur < length && dist1 !== 0) {
                ret.push(s[cur]);
                cur += dist1;
            }
            if (cur < length && dist2 !== 0) {
                ret.push(s[cur]);
                cur += dist2;
            }
        }
    }
    return ret.join("")
};