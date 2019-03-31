function curtail(arr) {
    var ret = [];
    for (var i = 1; i < arr.length; ++i) {
        ret.push(arr[i]);
    }
    return ret;
}