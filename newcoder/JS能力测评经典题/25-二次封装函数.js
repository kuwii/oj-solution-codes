function partial(fn, str1, str2) {
    return function(str3) {
        return fn(str1, str2, str3);
    };
}