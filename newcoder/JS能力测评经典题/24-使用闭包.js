function makeClosures(arr, fn) {
    var ret = [];
    for (var i = 0; i != arr.length; ++i) {
        ret.push(function(num) {
            return function() {
                return fn(num);
            };
        }(arr[i]));
    }
    return ret;
}