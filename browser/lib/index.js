'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createOutputFile;

var _fs = require('fs');

/**
 * @function
 * @param path
*/function createOutputFile(path) {
    var stream = (0, _fs.createWriteStream)(path);

    var write = /**
                 * @function
                 * @param string
                */function write(string) {
        stream.write(string);
    };

    write.close = /**
                   * @function
                  */function close() {
        stream.close();
    };

    return write;
}
//# sourceMappingURL=index.js.map