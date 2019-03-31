function multiply(a, b) {
    var sa = a.toString().split('.');
    var sb = b.toString().split('.');
    var lenA = sa[1] ? sa[1].length : 0;
    var lenB = sb[1] ? sb[1].length : 0;
    return (a*b).toFixed(lenA+lenB);
}
console.log(multiply(3,0.001));