/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var words = s.replace(/(\s*$)/g, "").split(" ");
    // console.log(words);
    return words[words.length-1].length;
};