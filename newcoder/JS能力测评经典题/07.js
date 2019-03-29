function prepend(arr, item) {
    var ret = [];
    ret.push(item);
    for (var i = 0; i != arr.length; ++i) {
        ret.push(arr[i]);
    }
    return ret;
}