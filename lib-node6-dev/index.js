'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createOutputFile;

var _fs = require('fs');

function createOutputFile(path) {
  const stream = (0, _fs.createWriteStream)(path);

  const write = function write(string) {
    stream.write(string);
  };

  write.close = function close() {
    stream.close();
  };

  return write;
}
//# sourceMappingURL=index.js.map