/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var number = {
        'I': 1,
        'V': 5, 'X': 10,
        'L': 50, 'C': 100,
        'D': 500, 'M': 1000,
    };
    var specialNumber = {
        'IV': 4, 'IX': 9,
        'XL': 40, 'XC': 90,
        'CD': 400, 'CM': 900,
    };
    
    s += '-';
    var end = s.length - 1;
    var i = 0;
    var ret = 0;
    while (i != end) {
        var specialCheck = s[i]+s[i+1];
        if (specialNumber.hasOwnProperty(specialCheck)) {
            ret += specialNumber[specialCheck];
            i += 2;
        } else {
            ret += number[s[i]];
            i += 1;
        }
    }

    return ret;
};