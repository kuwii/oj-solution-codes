/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (matrix.length == 0) return [];
    var ret = [];
    // top, right, bottom, left
    var border = [0, matrix[0].length-1, matrix.length-1, 0];
    // toAdd value of border
    var direction = [1, -1, -1, 1];
    
    var move = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    var range = [[[0, 3], [0, 1]],
                 [[0, 1], [2, 1]],
                 [[2, 1], [2, 3]],
                 [[2, 3], [0, 3]]];
    var update = [1, -1, -1, 1];
    var mode = 0;
    
    while (border[0] <= border[2] && border[3] <= border[1]) {
        var startPt = [border[range[mode][0][0]], border[range[mode][0][1]]];
        var endPt = [border[range[mode][1][0]], border[range[mode][1][1]]];
        var i = startPt[0], j = startPt[1];
        while (i != endPt[0] || j != endPt[1]) {
            ret.push(matrix[i][j]);
            i += move[mode][0], j += move[mode][1];
        }
        ret.push(matrix[i][j]);
        border[mode] += update[mode];
        mode = (mode + 1) % 4;
    }
    
    return ret;
};