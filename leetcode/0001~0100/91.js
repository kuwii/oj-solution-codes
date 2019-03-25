/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (s.length == 0) { return 0; }
    if (s[0] == '0') { return 0; }
    
    var last1 = 1, last2 = 1;
    var zeroMark = (s[s.length-1] == 0 ? true : false), combineZeroMark = false;
    for (var i = s.length-2; i >= 0; --i) {
        var cur = 0;
        if (s[i] == '0' && (!zeroMark)) {
            cur = last1;
            zeroMark = true;
            combineZeroMark = false;
        } else {
            var combine = (s[i]-'0')*10 + (s[i+1]-'0');
            // 00 or X0 > 26
            if ((combine <= 0 || 26 < combine) && zeroMark) {
                return 0;
            } else {
                zeroMark = false;
            }
            // X0 <= 26
            if (s[i+1] == '0') {
                cur = last2;
                combineZeroMark = true;
            } else if (combineZeroMark) {
                cur = last2;
                combineZeroMark = false;
            } else {
                cur = combine <= 26 ? last1+last2 : last1;
                combineZeroMark = false;
            }
        }
        last2 = last1;
        last1 = cur;
    }
    return last1;
};