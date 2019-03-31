function curryIt(fn) {
    var args = [], numArgs = fn.length;
    var ret = function(arg) {
        args.push(arg);
        if (args.length < numArgs) {
            return ret;
        } else {
            return fn.apply(this, args);
        }
    };
    return ret;
}