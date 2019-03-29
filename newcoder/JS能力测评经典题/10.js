function insert(arr, item, index) {
    var ret = [];
    for (var i = 0; i != index; ++i) {
        ret.push(arr[i]);
    }
    ret.push(item);
    for (var i = index; i != arr.length; ++i) {
        ret.push(arr[i]);
    }
    return ret;
}