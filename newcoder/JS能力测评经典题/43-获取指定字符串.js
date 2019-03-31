function captureThreeNumbers(str) {
    var ret = str.match(/\d{3}/);
    return ret != null ? ret[0] : false;
}