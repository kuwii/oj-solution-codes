/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var emptyMtrx = function() {
        return [
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
        ]
    };
    var row = emptyMtrx(), col = emptyMtrx(), cell = emptyMtrx();
    for (var i = 0; i != board.length; ++i) {
        for (var j = 0; j != board[i].length; ++j) {
            if (board[i][j] == '.') continue;
            var num = board[i][j] - '0';
            if (++row[i][num] > 1) return false;
            if (++col[j][num] > 1) return false;
            var r = Math.floor(i / 3), c = Math.floor(j / 3);
            if (++cell[r*3+c][num] > 1) return false;
        }
    }
    return true;
};