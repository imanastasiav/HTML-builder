const fs = require('fs'); //file system
const path = require('path'); //работа с путями
const file = path.join('text.txt');
const stream = new fs.ReadStream(file);
stream.pipe(process.stdout);