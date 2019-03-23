// slow version
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    var markH = Math.max();
    var markV = -Math.max();
    for (var i = 0; i != matrix.length; ++i) {
        var set0 = false;
        for (var j = 0; j != matrix[i].length; ++j) {
            if (matrix[i][j] == 0) {
                set0 = true;
            } else if (i && (matrix[i-1][j] == 0 || matrix[i-1][j] == markV)) {
                matrix[i][j] = markV;
            } else if (set0) {
                matrix[i][j] = markH;
            }
        }
    }
    for (var i = matrix.length-1; i >= 0; --i) {
        var set0 = false;
        for (var j = matrix[i].length-1; j >= 0; --j) {
            if (matrix[i][j] == 0) {
                set0 = true;
            }else if (i+1 < matrix.length && (matrix[i+1][j] == 0 || matrix[i+1][j] == markV)) {
                matrix[i][j] = markV;
            } else if (set0) {
                matrix[i][j] = markH;
            } 
        }
    }
    for (var i = 0; i != matrix.length; ++i) {
        for (var j = 0; j != matrix[i].length; ++j) {
            if (matrix[i][j] == markH || matrix[i][j] == markV) {
                matrix[i][j] = 0;
            }
        }
    }
    console.log(matrix);
};

// fast? version
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    var deleteFirstCol = false;
    for (var i = 0; i != matrix.length; ++i) {
        if (matrix[i][0] == 0) { deleteFirstCol = true; }
        for (var j = 1; j != matrix[i].length; ++j) {
            if (matrix[i][j] == 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    for (var i = 1; i != matrix.length; ++i) {
        for (var j = 1; j != matrix[i].length; ++j) {
            if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                matrix[i][j] = 0;
            }
        }
    }
    if (matrix[0][0] == 0) {
        for (var j = 0; j != matrix[0].length; ++j) {
            matrix[0][j] = 0;
        }
    }
    if (deleteFirstCol) {
        for (var i = 0; i != matrix.length; ++i) {
            matrix[i][0] = 0;
        }
    }
    
};