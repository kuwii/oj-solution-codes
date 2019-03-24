/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    var r = board.length, c = board[0].length;
    var dfs = function (i, j, pos) {
        var cur = board[i][j];
        if (cur != word[pos]) { return false; }
        if (pos == word.length-1) { return true; }
        board[i][j] = '';
        if (i > 0 && board[i-1][j] != '' && dfs(i-1, j, pos+1)) { return true; }
        if (i < r-1 && board[i+1][j] != '' && dfs(i+1, j, pos+1)) { return true; }
        if (j > 0 && board[i][j-1] != '' && dfs(i, j-1, pos+1)) { return true; }
        if (j < c-1 && board[i][j+1] != '' && dfs(i, j+1, pos+1)) { return true; }
        board[i][j] = cur;
    }
    
    for (var i = 0; i != r; ++i) {
        for (var j = 0; j != c; ++j) {
            if (dfs(i, j, 0)) { return true; }
        }
    }
    return false;
};