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
    const stream = (0, _fs.createWriteStream)(path);

    const write = /**
                   * @function
                   * @param string
                   * @param logLevel
                  */function write(string, logLevel) {
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