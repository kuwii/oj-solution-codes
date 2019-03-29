function square(arr) {
    var ret = [];
    for (var i = 0; i != arr.length; ++i) {
        ret.push(Math.pow(arr[i], 2));
    }
    return ret;
}