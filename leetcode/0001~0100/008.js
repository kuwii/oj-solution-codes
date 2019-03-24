/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var ret = 0, sign = 1;
    var numberDetected = false;
    for (c of str) {
        if (c >= '0' && c <= '9') {
            numberDetected = true;
            ret = ret * 10 + parseInt(c);
        } else if (c === '-' && (!numberDetected)) {
            numberDetected = true;
            sign = -1;
        } else if (c === '+' && (!numberDetected)) {
            numberDetected = true;
            sign = 1;
        } else if (c === ' ' || c === '\t' || c === '\r') {
            if (numberDetected) {
                break;
            }
        } else {
            break;
        }
    }
    ret *= sign;
    if (ret > 2147483647) { ret = 2147483647; }
    if (ret < -2147483648) { ret = -2147483648; }
    return ret;
};