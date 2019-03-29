function findAllOccurrences(arr, target) {
    var ret = [];
    for (var i = 0; i != arr.length; ++i) {
        if (arr[i] == target) {
            ret.push(i);
        }
    }
    return ret;
}