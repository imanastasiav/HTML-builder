const fs = require('fs');
const path = require('path');
const folder = path.join(__dirname, 'secret-folder');

fs.readdir(folder, (err, data) => {
  if (err) {
    console.log(err.message);
  }

  data.forEach(file => {
    const filePath = path.join(folder, file);
    fs.stat(filePath, (error, stats) => {
      if(error) {
        console.log(error);
      } else {
        if (stats.isFile()) {
          const ext = path.extname(filePath);
          console.log(path.basename(filePath, ext) + '-' + ext.slice(1, ext.length) + '-' + stats.size + 'b');
        }
      }
    })
  })
})