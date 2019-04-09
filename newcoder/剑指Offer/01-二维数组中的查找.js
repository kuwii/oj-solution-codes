function Find(target, array) {
    if (array.length == 0 || array[0].length == 0) {
        return false;
    }
    var numR = array.length, numC = array[0].length;
    var i = numR-1, j = 0;
    while (i >= 0 && j < numC) {
        var cur = array[i][j];
        if (target == cur) {
            return true;
        } else if (target > cur) {
            ++j;
        } else {
            --i;
        }
    }
    return false;
}