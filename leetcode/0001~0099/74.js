/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix.length == 0) return false;
    
    var hight = matrix.length, width = matrix[0].length;
    
    var top = 0, bottom = matrix.length-1;
    var row = null;
    while (top <= bottom) {
        var middle = Math.floor((top+bottom)/2);
        if (matrix[middle][0] <= target && target <= matrix[middle][width-1]) {
            row = middle;
            break;
        } else if (target < matrix[middle][0]) {
            bottom = middle - 1;
        } else {
            top = middle + 1;
        }
    }
    if (row == null) {
        return false;
    }
    
    var arr = matrix[row], left = 0, right = width-1;
    while (left <= right) {
        var middle = Math.floor((left+right)/2);
        // console.log(left, middle, right, arr[middle])
        if (arr[middle] == target) {
            return true;
        } else if (arr[middle] < target) {
            left = left + 1;
        } else {
            right = middle - 1;
        }
    }
    return false;
    
};