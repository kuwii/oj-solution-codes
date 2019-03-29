function parse2Int(num) {
    var digits = [];
    for (var i = 0; i != num.length; ++i) {
        if (num[i] >= '0' && num[i] <= '9') {
            digits.push(num[i]);
        } else {
            break;
        }
    }
    return parseInt(digits.join(""));
}