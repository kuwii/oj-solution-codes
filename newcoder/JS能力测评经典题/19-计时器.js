function count(start, end) {
    console.log(start++);
    var id = setInterval(function() {
        if (start <= end) console.log(start++);
        else clearInterval(id);
    }, 100);
    return {
        cancel: function() {clearInterval(id)}
    }
}