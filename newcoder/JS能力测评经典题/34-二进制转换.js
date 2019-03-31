function base10(str) {
    var ret = 0;
    for (var i = 0; i != str.length; ++i) {
        ret = ret << 1;
        if (str[i] == '1') { ret += 1; }
    }
    return ret;
}