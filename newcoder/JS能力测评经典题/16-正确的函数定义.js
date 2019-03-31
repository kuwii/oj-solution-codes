function functions(flag) {
    var getValue = null;
    if (flag) {
      getValue = function() { return 'a'; }
    } else {
      getValue = function() { return 'b'; }
    }

    return getValue();
}