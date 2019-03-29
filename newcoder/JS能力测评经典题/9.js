function concat(arr1, arr2) {
    var ret = [];
    for (var i = 0; i != arr1.length; ++i) {
        ret.push(arr1[i]);
    }
    for (var i = 0; i != arr2.length; ++i) {
        ret.push(arr2[i]);
    }
    return ret;
}