function truncate(arr) {
    var ret = [];
    for (var i = 0, end = arr.length-1; i < end; ++i) {
        ret.push(arr[i]);
    }
    return ret;
}