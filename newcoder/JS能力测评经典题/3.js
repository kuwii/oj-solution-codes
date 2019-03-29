function remove(arr, item) {
    var ret = [];
    for (var i = 0; i != arr.length; ++i) {
        if (arr[i] != item) {
            ret.push(arr[i]);
        }
    }
    return ret;
}