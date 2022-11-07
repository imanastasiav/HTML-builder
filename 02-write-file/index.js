const fs = require('fs');
const readline = require('readline');
const path = require('path');

const rLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const filePath = path.join('text.txt');
const file = fs.createWriteStream(filePath);

readline.emitKeypressEvents(process.stdin);
process.stdin.on('keypress', (ch, key) => {
  if (key && key.ctrl && key.name === 'c') {
    console.log('\nВы вышли');
  }
})

function write() {

  rLine.question('Напишите:', text => {
    console.log(text);
    if (text.toLocaleLowerCase() === 'exit') {
      console.log('\nВы вышли');
      rLine.close();
      return;
    }
    file.write(text + '\n', err => {
      if(err) {
        console.log(err.message);
      } else {
        write();
      }
    });
  });
}

write();