function convertToBinary(num) {
    var ret = [];
    while (num != 0) {
        ret.push(num & 1);
        num = num >> 1;
    }
    while (ret.length < 8) {
        ret.push(0);
    }
    return ret.reverse().join('');
}