function count(arr, item) {
    var cnt = 0;
    for (var i = 0; i != arr.length; ++i) {
        if (arr[i] == item) {
            ++cnt;
        }
    }
    return cnt;
}