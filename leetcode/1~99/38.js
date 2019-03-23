/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var ret = [1];
    while (--n) {
        var count = 0;
        var cur = [];
        ret.push('#');
        for (var i = 0; i != ret.length; ++i) {
            if (i == 0 || ret[i] == ret[i-1]) {
                ++count;
            } else {
                cur.push(count);
                cur.push(ret[i-1]);
                count = 1;
            }
        }
        ret = cur;
    }
    return ret.join("");
};