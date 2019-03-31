function containsNumber(str) {
    for (var i = 0; i != str.length; ++i) {
        var dis = str[i] - '0';
        if (0 <= dis && dis <= 9) {
            return true;
        }
    }
    return false;
}