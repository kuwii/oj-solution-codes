/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    if (s.length > 12) { return []; }
    var ret = [];
    var end1 = s.length-2, end2 = s.length-1, end3 = s.length, end = s.length;
    var ok = function(str) {
        if (str[0] == '0' && str.length > 1) { return false; }
        return parseInt(str) <= 255;
    }
    var end_i = Math.min(4, end1);
    for (var i = 1; i < end_i; ++i) {
        var end_j = Math.min(i+4, end2);
        for (var j = i+1; j < end_j; ++j) {
            var end_k = Math.min(j+4, end3);
            for (var k = j+1; k < end_k; ++k) {
                s1 = s.substring(0, i);
                s2 = s.substring(i, j);
                s3 = s.substring(j, k);
                s4 = s.substring(k, end);
                // console.log(s1, s2, s3,s4);
                if (ok(s1) && ok(s2) && ok(s3) && ok(s4)) {
                    ret.push([s1, s2, s3, s4].join('.'));
                }
            }
        }
    }
    return ret;
};