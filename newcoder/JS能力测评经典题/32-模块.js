function createModule(str1, str2) {
    var Ret = function () {
        this.greeting = str1;
        this.name = str2;
        this.sayIt = function() {
            return this.greeting + ', ' + this.name;
        };
    }
    return new Ret();
}