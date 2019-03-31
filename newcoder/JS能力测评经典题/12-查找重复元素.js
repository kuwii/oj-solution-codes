function duplicates(arr) {
    var ret = [];
    arr.sort();
    for (var i = 1; i < arr.length; ++i) {
        if (arr[i] == arr[i-1] && (ret.length == 0 || ret[ret.length-1] != arr[i])) {
            ret.push(arr[i]);
        }
    }
    return ret;
}