function iterate(obj) {
    var ret=[];
    Object.keys(obj).forEach(function(item){
        ret.push(item + ': ' + obj[item]);
    });
    return ret;
}