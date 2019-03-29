function append(arr, item) {
    var ret = [];
    for (var i = 0; i != arr.length; ++i) {
        ret.push(arr[i]);
    }
    ret.push(item);
    return ret;
}