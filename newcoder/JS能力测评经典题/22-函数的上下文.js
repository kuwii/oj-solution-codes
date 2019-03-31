function speak(fn, obj) {
    return fn.apply(obj, []);
}