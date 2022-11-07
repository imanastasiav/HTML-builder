const fs = require('fs'); //file system
const path = require('path'); //работа с путями
const file = path.join('text.txt');

/*fs.readFile(file, (err,content) => {
  if (err) {
    throw err
  }
  const data = Buffer.from(content);
  console.log(data.toString())
})*/

const { Readable } = require('stream');
const stream = new fs.ReadStream(file, { encoding: 'utf8' });
stream.pipe(process.stdout);