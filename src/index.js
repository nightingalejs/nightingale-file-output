import { createWriteStream } from 'fs';

export default function createOutputFile(path) {
  const stream = createWriteStream(path);

  const write = function write(string) {
    stream.write(string);
  };

  write.close = function close() {
    stream.close();
  };

  return write;
}
