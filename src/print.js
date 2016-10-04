import fs from 'fs';

module.exports = function print(license, filename) {
    if (!filename) {
      var filename = "LICENSE";
    }
    const stream = fs.createWriteStream(filename);
    stream.once('open', fd => {
      stream.write(license);
      stream.end();
    });
}