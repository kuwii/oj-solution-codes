function jumpFloor(number)
{
    var ret = [0, 1, 1];
    for (var i = 0; i != number; ++i) {
        ret[1] += ret[0];
        ret[2] += ret[0];
        ret[0] = ret[1];
        ret[1] = ret[2];
        console.log(ret);
    }
    return ret[0];
}
console.log(jumpFloor(10));