/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows == 0) { return []; }
    var ret = [[1]];
    for (var i = 1; i != numRows; ++i) {
        var lastRow = ret[i-1];
        var newRow = [1];
        for (var j = 1; j != lastRow.length; ++j) {
            newRow.push(lastRow[j]+lastRow[j-1]);
        }
        newRow.push(1);
        ret.push(newRow);
    }
    return ret;
};