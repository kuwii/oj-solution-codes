// simple version
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s === "") return "";
    
    var left = 0, right = 0;
    for (var i = 0; i != s.length; ++i) {
        for (var j = i+1; j != s.length; ++j) {
            // console.log([i, j]);
            
            var ok = true;
            for (var a = i, b = j; a < b; ++a, --b) {
                // console.log('  ', [a, b], ' ', s[a], s[b], (s[a] == s[b]))
                if (s[a] !== s[b]) {
                    ok = false;
                    break;
                }
            }
            if (ok && (j-i > right-left)) {
                left = i, right = j;
            }
        }
    }
    
    return s.substring(left, right+1);
};

// faster version
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s === "") return "";
    
    var left = 0, right = 0;
    for (var i = 0; i != s.length; ++i) {
        var a, b;
        
        a = i-1, b = i+1;
        while (a >= 0 && b < s.length) {
            if (s[a] != s[b]) {
                break;
            }
            --a, ++b;
        }
        ++a, --b;
        if (b-a > right-left) {
            left = a, right = b;
        }
        
        a = i-1, b = i;
        while (a >= 0 && b < s.length) {
            if (s[a] != s[b]) {
                break;
            }
            --a, ++b;
        }
        ++a, --b;
        if (b-a > right-left) {
            left = a, right = b;
        }
    }
    
    return s.substring(left, right+1);
};