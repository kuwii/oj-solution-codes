function minNumberInRotateArray(rotateArray) {
    if (rotateArray.length == 0) { return 0; }
    var l = 0, r = rotateArray.length - 1;
    var min = 0;
    while (l <= r) {
        var m = Math.floor((l+r)/2);
        min = min == 0 ? rotateArray[m] : Math.min(min, rotateArray[m]);
        if (rotateArray[m] > rotateArray[r]) {
            l = m+1;
        } else {
            r = m-1;
        }
    }
    return min;
}