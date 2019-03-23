// simple version
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle == "") return 0;
    var end = haystack.length - needle.length + 1;
    for (var i = 0; i < end; ++i) {
        var ok = true;
        for (var j = 0; j != needle.length; ++j) {
            if (needle[j] != haystack[i+j]) {
                ok = false;
                break;
            }
        }
        if (ok) { return i; }
    }
    return -1;
};

// ... version
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};

// kmp version
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // getNext
    var next = [-1];
    var k = -1, j = 0, length = needle.length - 1;
    while (j < length) {
        if (k == -1 || needle[k] == needle[j]) {
            next[++j] = ++k;
        } else {
            k = next[k];
        }
    }
    // kmp
    var i = 0; j = 0;
    while (i < haystack.length && j < needle.length) {
        if (j == -1 || haystack[i] == needle[j]) {
            ++i, ++j;
        } else {
            j = next[j];
        }
    }
    if (j == needle.length) {
        return i - j;
    } else {
        return -1;
    }
};

// kmp version 2
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // getNext
    var next = [-1];
    var k = -1, j = 0, length = needle.length - 1;
    while (j < length) {
        if (k == -1 || needle[k] == needle[j]) {
            ++j, ++k;
            if (needle[k] == needle[j]) {
                next.push(next[k]);
            } else {
                next.push(k);
            }
        } else {
            k = next[k];
        }
    }
    // kmp
    var i = 0; j = 0;
    while (i < haystack.length && j < needle.length) {
        if (j == -1 || haystack[i] == needle[j]) {
            ++i, ++j;
        } else {
            j = next[j];
        }
    }
    if (j == needle.length) {
        return i - j;
    } else {
        return -1;
    }
};