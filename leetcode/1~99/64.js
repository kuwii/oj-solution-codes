/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if (grid.length == 0) return 0;
    if (grid[0].length == 0) return 0;
    var minSum = [];
    for (var i = 0; i != grid.length; ++i) {
        var curSum = [];
        for (var j = 0; j != grid[i].length; ++j) {
            if (j == 0) {
                if (i == 0) curSum.push(grid[0][0]);
                else curSum.push(minSum[i-1][0]+grid[i][0]);
            } else {
                if (i == 0) curSum.push(curSum[j-1]+grid[i][j]);
                else curSum.push(Math.min(minSum[i-1][j]+grid[i][j], curSum[j-1]+grid[i][j]));
            }
        }
        minSum.push(curSum);
    }
    return minSum[grid.length-1][grid[0].length-1];
};