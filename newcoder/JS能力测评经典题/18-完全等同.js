function identity(val1, val2) {
    if (typeof val1 != typeof val2) { return false; }
    else { return val1 === val2; }
}