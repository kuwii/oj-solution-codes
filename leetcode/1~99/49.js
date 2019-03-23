/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var base = {}
    for (var str of strs) {
        var feature = str.split("").sort().join("");
        if (base.hasOwnProperty(feature)) {
            base[feature].push(str);
        } else {
            base[feature] = [str];
        }
    }
    return Object.values(base);
};