/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var curRow = [1];
    for (var i = 0; i != rowIndex; ++i) {
        var newRow = [1];
        for (var j = 1; j != curRow.length; ++j) {
            newRow.push(curRow[j]+curRow[j-1]);
        }
        newRow.push(1);
        curRow = newRow;
    }
    return curRow;
};