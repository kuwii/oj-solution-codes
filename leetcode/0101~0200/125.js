// slower version
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var l = 0, r = s.length-1;
    var isAlpha = function(c) { return /[a-zA-Z0-9]/.test(c); }
    s = s.toLowerCase();
    while (l < r) {
        while (!isAlpha(s[l]) && l < r) { ++l; }
        while (!isAlpha(s[r]) && l < r) { --r; }
        if (s[l] != s[r]) {
            return false;
        } else {
            ++l; --r;
        }
    }
    return true;
};

// faster version
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/\s/g, '');
    s = s.replace(/[^0-9a-zA-Z]/g, '');
    s = s.toLowerCase();
    
    for (var l = 0, r = s.length-1; l < r; ++l, --r) {
        if (s[l] != s[r]) { return false; }
    }
    return true;
};