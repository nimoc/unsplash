'use strict'
var uh = function (g, width, height, param) {
    var path = ['https://picsum.photos']
    var i
    for(i=0; i<arguments.length; i++) {
        var item = arguments[i]
        item = String(item)
        if (!/^(g|\d+)$/.test(item)) {
            if (item === 'r') {
                item = 'random'
            }
            item = '?' + item
        }
        else {
            item = '/' + item
        }
        path.push(item)
    }
    return path.join('')
}
if (typeof exports !== 'undefined') {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = uh
}
if (typeof module !== 'undefined') {
    module.exports = uh
}
