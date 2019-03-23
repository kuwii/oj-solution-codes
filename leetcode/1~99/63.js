/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    var stepNums = [];
    for (var i = 0; i != obstacleGrid.length; ++i) {
        var curRow = [];
        if (i == 0) {
            curRow.push(obstacleGrid[0][0] == 0 ? 1 : 0);
            for (var j = 1; j != obstacleGrid[i].length; ++j) {
                if (obstacleGrid[i][j] == 1) {
                    curRow.push(0);
                    continue;
                }
                curRow.push(obstacleGrid[i][j-1] == 0 ? curRow[j-1] : 0);
            }
        } else {
            curRow.push(obstacleGrid[i-1][0] == 0 ? (obstacleGrid[i][0] == 0 ? stepNums[i-1][0] : 0) : 0);
            for (var j = 1; j != obstacleGrid[i].length; ++j) {
                if (obstacleGrid[i][j] == 1) {
                    curRow.push(0);
                    continue;
                }
                var steps = obstacleGrid[i-1][j] == 0 ? stepNums[i-1][j] : 0;
                steps += obstacleGrid[i][j-1] == 0 ? curRow[j-1] : 0;
                curRow.push(steps);
            }
        }
        stepNums.push(curRow);
        // console.log(stepNums);
    }
    return stepNums[obstacleGrid.length-1][obstacleGrid[0].length-1];
};