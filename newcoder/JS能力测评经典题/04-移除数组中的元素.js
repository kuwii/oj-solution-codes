function removeWithoutCopy(arr, item) {
    var pt = 0;
    for (var i = 0; i != arr.length; ++i) {
        if (arr[i] != item) {
            var temp = arr[i];
            arr[i] = arr[pt];
            arr[pt] = temp;
            ++pt;
        }
    }
    while (arr.length > pt) { arr.pop(); }
    return arr;
}